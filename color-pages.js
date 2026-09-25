/* =====================================================
   Cub Hill Church — Color Pages
   Six-view card rotation
   ===================================================== */

(() => {
    "use strict";

    // =====================================================
    // TOP CARD — COLOR PAGES
    //
    // The color fields are intentionally blank.
    // Only the label immediately to the right is displayed.
    // =====================================================

    const colorPages = [
        {
            label: "Dark / SIN",
            className: "color-dark-gray",
            description: "This color stands for sin. Sin is when we disobey God. The Bible says in Romans 3:23 that everyone has sinned. Sin is what separates us from God, because God has never sinned. We cannot save ourselves from our sin."
        },
        {
            label: "Red / BLOOD",
            className: "color-red",
            description: "This color stands for the blood of Jesus. Jesus died on the cross to save us from our sins. John 3:16 says that Jesus did this to provide for our salvation. Not only did Jesus die for us, but He also rose from the dead to show His power over death!"
        },
        {
            label: "Light / PURITY",
            className: "color-ivory",
            description: "This color stands for the cleansing of salvation. 2 Corinthians 5:17 says that if we have accepted Christ, we have become a new creation. God forgives our sin and makes us as white as snow! We are justified before Him."
        },
        {
            label: "Green / GROWTH",
            className: "color-green",
            description: "This color stands for growth. If you are a follower of Christ, you need to grow in your new life! Like it says in 2 Peter 3:18, we need to spend time talking to God in prayer, fellowshipping with other believers, and reading God’s Word to grow spiritually."
        },
        {
            label: "Gold / HEAVEN",
            className: "color-gold",
            description: "This color stands for heaven. If you follow Christ and are a part of God’s family, you will get to spend eternity with God in heaven! Jesus said in John 14:1-3 that He has gone to prepare a place in heaven for everyone who follows Him."
        }
    ];


    // =====================================================
    // BOTTOM CARD — TEXT PAGES
    //
    // There are six views.
    // Each view contains six text lines.
    //
    // These are currently placeholders because the supplied
    // design illustration only identifies them as "Text".
    // Replace these with the actual wording when available.
    // =====================================================

    const textPages = [
        [
            "Romans 3:23",
            "For all have sinned, and come short of the glory of God.",
            "No one is perfect. Every human being has thought, said, or done things that break God's moral standard, leaving everyone spiritually separated from Him.",
            "Also see Romans 3:10-18"
        ],
        [
            "Romans 6:23a",
            "For the wages of sin is death.",
            "Just as a worker earns a paycheck, the 'wage' humans earn for sin is death; which refers to physical death as well as permanent, spiritual separation from God."
        ],
        [
            "Romans 6:23b",
            "...but the gift of God is eternal life through Jesus Christ our Lord.",
            "Romans 5:8",
            "But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us.",
            "Jesus Christ paid the ultimate price by dying on the cross to take on the punishment that humanity deserved."
        ],
        [
            "Romans 10:9",
            "That if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved.",
            "Salvation is a gift that must be accepted. It requires publicly declaring Jesus as Master of your life and sincerely believing that His resurrection conquered death.",
            "Also see Romans 10:13",
            "...for everyone who calls on the name of the Lord will be saved.",
            "Jesus died to pay the penalty for our sins and rescue us from eternal death. Salvation, the forgiveness of sins, is available to anyone who will trust in Jesus Christ as Lord and Savior."
        ],
        [
            "Romans 5:1",
            "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ.",
            "Once a person places their faith in Christ, they are legally declared innocent (justified) in God’s sight. The friction and hostility caused by sin are gone, replaced by lasting spiritual peace"
        ],
        [
            "Romans 8:1",
            "Therefore, there is now no condemnation for those who are in Christ Jesus.",
            "And Romans 8:38-39",
            "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
            "This final step seals the journey with a absolute promise of security. Once a person is saved, nothing in the universe can tear them away from God’s love and protection."
        ]
    ];


    // =====================================================
    // CURRENT PAGE INDICES
    // =====================================================

    let colorPageIndex = 0;
    let textPageIndex = 0;


    // =====================================================
    // ELEMENT REFERENCES
    // =====================================================

    const colorPageList =
        document.getElementById("colorPageList");

    const textPageList =
        document.getElementById("textPageList");

    const colorNextButton =
        document.getElementById("colorNextButton");

    const textNextButton =
        document.getElementById("textNextButton");

    const colorPageIndicator =
        document.getElementById("colorPageIndicator");

    const textPageIndicator =
        document.getElementById("textPageIndicator");


    // =====================================================
    // DISPLAY CURRENT COLOR PAGE
    // =====================================================

    function renderColorPage() {

        // Remove the previous color page.
        colorPageList.replaceChildren();

        // Get the current color.
        const page = colorPages[colorPageIndex];

        // Create the row.
        const row = document.createElement("div");
        row.className = "color-page-row";

        // Create the blank color field.
        const swatch = document.createElement("span");
        swatch.className =
            `color-page-swatch ${page.className}`;

        // The color field itself contains no text.
        swatch.setAttribute("aria-hidden", "true");

        // Create the text label.
        const label = document.createElement("span");
        label.className = "color-page-label";
        label.textContent = page.label;

        //Create the text description.
        const textContainer = document.createElement("div");
        textContainer.className = "color-page-text";

        const description = document.createElement("span");
        description.className = "color-page-description";
        description.textContent = page.description;

        textContainer.append(label, description);

        // Put the color field and label together.
        row.append(swatch, textContainer);

        // Add the row to the card.
        colorPageList.appendChild(row);

        // Update the page indicator.
        colorPageIndicator.textContent =
            `${colorPageIndex + 1} / ${colorPages.length}`;
    }


    // =====================================================
    // DISPLAY CURRENT TEXT PAGE
    // =====================================================

    function renderTextPage() {

        // Remove the previous text page.
        textPageList.replaceChildren();

        // Get the current set of six text entries.
        const page = textPages[textPageIndex];

        // Create one row for each text entry.
        page.forEach((text) => {

            const row = document.createElement("div");
            row.className = "text-page-row";

            const line = document.createElement("span");
            line.textContent = text;

            row.appendChild(line);

            textPageList.appendChild(row);
        });

        // Update the page indicator.
        textPageIndicator.textContent =
            `${textPageIndex + 1} / ${textPages.length}`;
    }


    // =====================================================
    // GO TO NEXT COLOR PAGE
    //
    // Page 1 → 2 → 3 → 4 → 5 → 6 → 1
    // =====================================================

    function nextColorPage() {

        colorPageIndex =
            (colorPageIndex + 1) % colorPages.length;

        renderColorPage();
    }


    // =====================================================
    // GO TO NEXT TEXT PAGE
    //
    // Page 1 → 2 → 3 → 4 → 5 → 6 → 1
    // =====================================================

    function nextTextPage() {

        textPageIndex =
            (textPageIndex + 1) % textPages.length;

        renderTextPage();
    }


    // =====================================================
    // BUTTON EVENTS
    // =====================================================

    colorNextButton.addEventListener(
        "click",
        nextColorPage
    );

    textNextButton.addEventListener(
        "click",
        nextTextPage
    );


    // =====================================================
    // INITIAL DISPLAY
    // =====================================================

    renderColorPage();
    renderTextPage();

})();