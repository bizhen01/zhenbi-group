// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/zhenbi-group/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zhenbi-group/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Full list of publications in reverse chronological order. See also Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zhenbi-group/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zhenbi-group/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Members of the Bi Group at Penn State.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/zhenbi-group/people/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-the-bi-group-is-established-at-penn-state-as-zhen-bi-joins-the-department-of-physics-as-an-assistant-professor",
          title: 'The Bi Group is established at Penn State, as Zhen Bi joins the...',
          description: "",
          section: "News",},{id: "news-amogh-anakru-joins-the-group-as-a-ph-d-student",
          title: 'Amogh Anakru joins the group as a Ph.D. student.',
          description: "",
          section: "News",},{id: "news-sarvesh-srinivasan-joins-the-group-as-a-ph-d-student",
          title: 'Sarvesh Srinivasan joins the group as a Ph.D. student.',
          description: "",
          section: "News",},{id: "news-jian-hao-zhang-joins-the-group-as-a-postdoctoral-fellow",
          title: 'Jian-Hao Zhang joins the group as a postdoctoral fellow.',
          description: "",
          section: "News",},{id: "news-adrian-fedorko-joins-the-group-as-a-ph-d-student",
          title: 'Adrian Fedorko joins the group as a Ph.D. student.',
          description: "",
          section: "News",},{id: "news-zhen-gave-an-invited-talk-classification-and-characterization-of-average-symmetry-protected-topological-phases-at-the-kitp-program-a-quantum-universe-in-a-crystal",
          title: 'Zhen gave an invited talk, Classification and Characterization of Average Symmetry-Protected Topological Phases,...',
          description: "",
          section: "News",},{id: "news-anubhav-anilkumar-joins-the-group-as-a-ph-d-student",
          title: 'Anubhav Anilkumar joins the group as a Ph.D. student.',
          description: "",
          section: "News",},{id: "news-zhen-received-a-2024-nsf-career-award-for-theoretical-work-on-electronic-organization-in-strongly-correlated-metals-and-quantum-phase-transitions",
          title: 'Zhen received a 2024 NSF CAREER Award for theoretical work on electronic organization...',
          description: "",
          section: "News",},{id: "news-zhen-gave-an-invited-talk-fermionic-models-with-spontaneous-dipolar-symmetry-breaking-at-the-kitp-conference-on-gapless-quantum-many-body-systems-uc-santa-barbara",
          title: 'Zhen gave an invited talk, Fermionic Models with Spontaneous Dipolar Symmetry Breaking, at...',
          description: "",
          section: "News",},{id: "news-former-postdoctoral-fellow-jian-hao-zhang-begins-a-ctqm-prize-postdoctoral-fellowship-at-the-university-of-colorado-boulder-congratulations-jian-hao",
          title: 'Former postdoctoral fellow Jian-Hao Zhang begins a CTQM Prize Postdoctoral Fellowship at the...',
          description: "",
          section: "News",},{id: "news-zhen-gave-an-invited-talk-symtft-perspective-on-mixed-state-phases-at-the-simons-center-for-geometry-and-physics-stony-brook",
          title: 'Zhen gave an invited talk, SymTFT Perspective on Mixed-State Phases, at the Simons...',
          description: "",
          section: "News",},{id: "news-zhen-gave-an-invited-talk-strong-to-weak-symmetry-breaking-in-mixed-quantum-states-at-the-aps-global-summit",
          title: 'Zhen gave an invited talk, Strong-to-Weak Symmetry Breaking in Mixed Quantum States, at...',
          description: "",
          section: "News",},{id: "news-zhen-gave-an-invited-talk-average-crystalline-symmetry-protected-topological-phases-at-the-new-platforms-for-topological-quantum-matter-workshop-university-of-minnesota",
          title: 'Zhen gave an invited talk, Average Crystalline Symmetry-Protected Topological Phases, at the “New...',
          description: "",
          section: "News",},{id: "news-our-classification-of-topological-phases-with-average-symmetries-the-decohered-the-disordered-and-the-intrinsically-mixed-appears-in-physical-review-x",
          title: 'Our classification of topological phases with average symmetries — the decohered, the disordered,...',
          description: "",
          section: "News",},{id: "news-sarvesh-srinivasan-was-selected-for-the-princeton-summer-school-in-condensed-matter-physics",
          title: 'Sarvesh Srinivasan was selected for the Princeton Summer School in Condensed Matter Physics....',
          description: "",
          section: "News",},{id: "news-amogh-anakru-was-selected-for-the-boulder-school-for-condensed-matter-and-materials-physics",
          title: 'Amogh Anakru was selected for the Boulder School for Condensed Matter and Materials...',
          description: "",
          section: "News",},{id: "news-jinfei-zhou-joins-the-group-as-a-ph-d-student",
          title: 'Jinfei Zhou joins the group as a Ph.D. student.',
          description: "",
          section: "News",},{id: "news-linhao-li-joins-the-group-as-a-postdoctoral-researcher-welcome",
          title: 'Linhao Li joins the group as a postdoctoral researcher. Welcome!',
          description: "",
          section: "News",},{id: "news-former-postdoctoral-fellow-jian-hao-zhang-has-accepted-a-faculty-position-as-assistant-professor-at-westlake-university-which-he-will-take-up-later-in-2026-congratulations-jian-hao",
          title: 'Former postdoctoral fellow Jian-Hao Zhang has accepted a faculty position as Assistant Professor...',
          description: "",
          section: "News",},{id: "news-the-group-receives-an-icds-quantum-superseed-award-to-study-open-quantum-systems-beyond-markovianity-and-to-build-a-cross-disciplinary-community-for-quantum-simulation",
          title: 'The group receives an ICDS Quantum SuperSEED award to study open quantum systems...',
          description: "",
          section: "News",},{id: "news-amogh-anakru-was-named-a-kitp-graduate-fellow-for-fall-2026",
          title: 'Amogh Anakru was named a KITP Graduate Fellow for Fall 2026.',
          description: "",
          section: "News",},{id: "news-zhen-organized-an-invited-session-beyond-equilibrium-new-frontiers-in-mixed-state-phases-and-monitored-quantum-dynamics-at-the-aps-global-summit",
          title: 'Zhen organized an invited session, Beyond Equilibrium: New Frontiers in Mixed-State Phases and...',
          description: "",
          section: "News",},{id: "news-zhen-co-organized-a-workshop-bridging-classic-and-contemporary-perspectives-on-open-quantum-systems-at-the-simons-center-for-geometry-and-physics",
          title: 'Zhen co-organized a workshop, Bridging Classic and Contemporary Perspectives on Open Quantum Systems,...',
          description: "",
          section: "News",},{id: "news-zhen-gave-a-talk-when-symmetry-holds-only-on-average-at-the-aspen-center-for-physics-workshop-on-emerging-phases-in-quantum-materials",
          title: 'Zhen gave a talk, When Symmetry Holds Only on Average, at the Aspen...',
          description: "",
          section: "News",},{id: "news-jacopo-gliozzi-joins-the-group-as-a-cteq-postdoctoral-fellow",
          title: 'Jacopo Gliozzi joins the group as a CTEQ postdoctoral fellow.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%6A%62%35%31%38%34@%70%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=M8lsE8sAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0351-3963", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bizhen01", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/zhenbi-group/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
