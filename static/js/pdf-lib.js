setTimeout(async () => {
    const { 
        PDFDocument, 
        PageSizes, 
        degrees,
        rgb,
    } = window.PDFLib
    const fontkit = window.fontkit
    
    /**
     * Create a new PDFDocument, add fonts, create the page, etc.s
     */
    const pdfDoc = await PDFDocument.create()

    pdfDoc.registerFontkit(fontkit)
    const fontBirkshireSwash = await pdfDoc.embedFont(await fetch("/fonts/Berkshire_Swash/BerkshireSwash-Regular.ttf").then(res => res.arrayBuffer()))

    const colors = {
        dark: rgb(0.1059, 0.1686, 0.251),
        light: rgb(0.498, 0.3765, 0.6353),
        red: rgb(0.8, 0.2, 0.2),
        black: rgb(0, 0, 0),
        blue: rgb(0.2, 0.2, 0.8),
    }

    const page = pdfDoc.addPage([PageSizes.Letter[1], PageSizes.Letter[0]])

    /**
     * Load the different page elements
     */
    // Write text
    const titleText = ["Spiritual", "Computer", "Human", "Interactional", "Dimensions"]
    const titleSkew = [30, 15, 0, -15, -30]
    const titleDistance = [125, 150, 125, 175, 0]
    const titleSize = 30
    const titleFont = fontBirkshireSwash

    page.moveTo(25, 400)
    for (let i = 0; i < titleText.length; i++) {
        page.drawText(titleText[i], {
            xSkew: degrees(titleSkew[i]),
            size: titleSize,
            font: titleFont,
        })
        page.moveRight(titleDistance[i])
        page.moveUp(titleText[i].length*titleSkew[i]/3)
    }

    // Load icons
    const icons = {
        logo: {
            file: "logo_bright.svg",
            color: colors.dark,
            paths: [],
        },
        stamp: {
            file: "approval_stamp.svg",
            color: colors.red,
            paths: [],
        },
    }
    const xmlParser = new DOMParser()
    for (const icon in icons) {
        if (Object.hasOwnProperty.call(icons, icon)) {
            const element = icons[icon];
            const xml = await fetch(`/images/${element.file}`).then(res => res.text())
            const svg = xmlParser.parseFromString(xml, "image/svg+xml")
            icons[icon].paths = svg.querySelectorAll("path")
        }
    }

    // Draw logo
    page.moveTo(310, 520)
    icons.logo.paths.forEach(path => {
        const line = path.getAttribute("d")
        page.drawSvgPath(line, {
            color: icons.logo.color,
            scale: 0.5,
        })
    })

    // Write the text body
    const bodyName = "the holder of this certificate"
    const bodySign = window.localStorage.getItem("newSign")
    const bodyText = `
    Be it known to all that on this blessed day, the twenty-sixth of March in the year of our Lord two thousand
    and twenty-three, this certificate of astrological divination is hereby granted unto ${bodyName} by virtue
    of the celestial knowledge of astrology.

    Through the cunning craft of human-computer interaction, this certificate hath been meticulously fashioned
    to deliver unto thee a singular and personalized analysis of thy astrological profile, as founded upon the
    latest techniques of HCI and astrological theories.

    According to the intricate algorithms and models of machine learning employed in this endeavour, it hath
    been ascertained that ${bodyName} was born under the sign of ${bodySign}, with Sign Qualities as divined
    by advanced interfaces and inputs
    of the aforesaid analysis.

    By means of interactive widgets, intuitive interfaces, and advanced visualizations, the information contained
    within this certificate hath been optimized for ease of comprehension and maximum understanding, whereby all
    pertinent insights and prognostications are made available with but a cursory glance.

    It is advised that ${bodyName} may greatly profit from the insights encompassed within this certificate, by means
    of employing the various tools and techniques of HCI to attain a better comprehension of self and one's place
    in the cosmos. The various visualizations and interactive elements have been so devised as to allow for a more
    profound level of engagement and exploration, offering unto thee a truly immersive astrological experience.

    This certificate is hereby issued under the authority of the most advanced HCI technologies and astrological
    insights, and is attested to by the undersigned astrologer, who is duly qualified and experienced in the
    mysteries of the stars and the latest practices of HCI.

    May the heavens guide and bless ${bodyName} on their sojourn through life, and may this certificate be for
    them a beacon of knowledge and enlightenment.

    Given under my hand and seal, on this day and year aforesaid.
    `

    page.moveTo(175, 400)
    page.drawText(bodyText, {
        size: 9,
        font: fontBirkshireSwash,
        lineHeight: 10,
    })


    // Load zodiac signs
    const zodiacs = {
        aquarius: "Aquarius.png",
        aries: "Aries.png",
        cancer: "Cancer.png",
        capricorn: "Capricorn.png",
        gemini: "Gemini.png",
        leo: "Leo.png",
        libra: "Libra.png",
        ophiuchus: "Ophiuchus.png",
        pisces: "Pisces.png",
        sagittarius: "Sagittarius.png",
        scorpio: "Scorpio.png",
        taurus: "Taurus.png",
        virgo: "Virgo.png",
    }

    const signIcon = await pdfDoc.embedPng(await fetch(`/images/zodiac/${zodiacs[bodySign.toLowerCase()]}`).then(res => res.arrayBuffer()))
    const signSize = signIcon.scale(0.25)

    page.moveTo(10, 10)
    page.drawImage(signIcon, {
        width: signSize.width,
        height: signSize.height,
    })

    // Draw the stamp
    const stampText = "SCHID 26/03/2023"
    page.moveTo(500, 200)
    icons.stamp.paths.forEach(path => {
        const line = path.getAttribute("d")
        page.drawSvgPath(line, {
            color: icons.stamp.color,
            scale: 0.2,
        })
    })
    page.moveDown(130)
    page.moveRight(20)
    page.drawText(stampText, {
        size: 20,
        font: fontBirkshireSwash,
        color: colors.red,
        rotate: degrees(15),    
    })

    // Extract signature
    const signatureCanvas = document.querySelector("#canvas")
    await new Promise(r => setTimeout(r, 750))
    const signaturePaths = signatureCanvas.querySelectorAll("path")

    // Draw signature
    page.moveTo(200, 100)
    signaturePaths.forEach(path => {
        const line = path.getAttribute("d")
        page.drawSvgPath(line, {
            color: colors.blue,
            scale: 0.25,
        })
    })

    /**
     * Export the PDF to a new window
     */
    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: "application/pdf" })
    const blobUrl = URL.createObjectURL(blob)
    window.open(blobUrl, "_blank", "popupWindow,width=1000,height=100,scrollbars=yes")
}, 750)
