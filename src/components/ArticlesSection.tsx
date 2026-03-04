const popularSideArticles = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAogYFHYwNB_E-egUO-zZc55oFcMIOtkLPZ8aBCYBa96SDkADd1J_Htl1VlrtqnFpyWBfoY9vA6E3Kld69tSYHvxke2MhmMUGk_J1eeeq6H_9gaah6XCJvaHwLxd3rbYe7tY6wtkqyJ6npoNV8uHdZlbRviPMrWlsUllBzljnJWErNPbnmSIk7UWSG_3sjAmB_jQT-jMr6egIqUNrPKvaGq0nck40J_Bwb6hXJKSmJBZePj7HBL66ESB8Bp0D5tqdWUR_JvfPDZjkUI",
    title: "(C) Learn the best mouse trap strategy: The False Floor.",
    desc: "A humane, new way to catch mice. This innovative bucket mouse trap outsmarts even the most cautious rodents.",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe2kE3Ng9PziF3yNc5Qh3v7_28CHhwPDT496_Qedrql8Gb3bwZbaSVyZmHgYwIK9-jfHe6GunOOuC7k14lx-dE7YNYC3R-EvUAFx_GH4VHoDsV9-uccv1dx-e-RrGj3kyr7X2Ca6HehzOW0l8bQXBYCcppj3hUmeeYx5RJFjJushmLm_NFMrX1WpqEau-yTpKi2aUg702oe987N6viydUID_kei2icWhuPnrkbi_wcgBe76_9Q7rRhQn6Rzl1eHj9tFSQXJ401bf-y",
    title: 'New Way to Catch Mice: The "False Floor" Trap',
    desc: "Learn the best mouse trap strategy: The False Floor. A humane, new way to capture multiple mice safely.",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZj-zsG81vMWfKplvH71ceQJ-hkiYv5RklHGG7XZKuwTrClKygqv6smAdsB8uLhmn_r52AsU39FR0tXNw-YV93g79yjfyTxT3h1HTh-1DCMf0amXVVcKXP9omsZNp-CHyVhZFZVSzhxFBczazl71SUnVEpPS6CYqjaJNs61b31kATDFY0AlKTk5CKcvK1XRoXsZD16xl8_teiPdBPeX_P0UntrMCssYXXAaxGoihc_mr_y-LE-cewb1yP2VR8hpK5_nKVKndUq5Khq",
    title: "What is the Best Mouse Trap? (The Honest Truth)",
    desc: 'Search online for "the best mouse trap" and you\'ll find plenty of junk. Here\'s what actually works based on data.',
  },
];

const latestKnowledge = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1H7Kf6oi6ZMhouhndP3qWfnnllhhB7jPKObAJCdCm77t-55Qtc0yEmk_LfQFgirKAvkZ9OHzEJh-6aExlMUG-QSsCtEiUle36VEFg_3eWF8eIPykqiN4T_mGu9c4qlGGyrBz2f2ORcO3OKToe5twKN4qKD-qnnIgPfw3KLPz4MdtfXcLVLu_56C8zPR9tV95rYNDn9jb66py711nsLNQaqNkFFmvIrhm1lHlf4VPhc9rHdLeFIg_KoI0hc3LY9WvP2bH13onGIFzG",
    title: "The Best Mouse Trap Bait: A Chef's Guide",
    date: "Monday, Feb 9, 2026",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAogYFHYwNB_E-egUO-zZc55oFcMIOtkLPZ8aBCYBa96SDkADd1J_Htl1VlrtqnFpyWBfoY9vA6E3Kld69tSYHvxke2MhmMUGk_J1eeeq6H_9gaah6XCJvaHwLxd3rbYe7tY6wtkqyJ6npoNV8uHdZlbRviPMrWlsUllBzljnJWErNPbnmSIk7UWSG_3sjAmB_jQT-jMr6egIqUNrPKvaGq0nck40J_Bwb6hXJKSmJBZePj7HBL66ESB8Bp0D5tqdWUR_JvfPDZjkUI",
    title: "Learn the best mouse trap strategy: The False Floor.",
    date: "Monday, Feb 9, 2026",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe2kE3Ng9PziF3yNc5Qh3v7_28CHhwPDT496_Qedrql8Gb3bwZbaSVyZmHgYwIK9-jfHe6GunOOuC7k14lx-dE7YNYC3R-EvUAFx_GH4VHoDsV9-uccv1dx-e-RrGj3kyr7X2Ca6HehzOW0l8bQXBYCcppj3hUmeeYx5RJFjJushmLm_NFMrX1WpqEau-yTpKi2aUg702oe987N6viydUID_kei2icWhuPnrkbi_wcgBe76_9Q7rRhQn6Rzl1eHj9tFSQXJ401bf-y",
    title: "Strategic Exclusion: Beyond the Steel Wool",
    date: "Saturday, Aug 30, 2025",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK-B5fN_SIdhBtLZC3iAaccsp9Km0kioGYzqgwcyGoIIu6hEJFYQWiFkmCy2symO628X_4mQHmNTprSV053AMOQbOvbGhIrclcZwBiBGaLtkSt2DTEQFzO-nQK48GoV0g0r1xAe9BBatelhnIu-_TXAwpeukJP1r5sWQnWR8lrY_L5FyubACOTel9XByyQH2AuWPQ7yQf82q8hrnMA_3Oj8aFQQflZlo0BMknOPgEDiTtfGYmoWich_WQXBh4F1vod_j-DGO5Z9XFu",
    title: "How to Seal Entry Points: A Complete Exclusion Guide",
    date: "Friday, Jul 18, 2025",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZj-zsG81vMWfKplvH71ceQJ-hkiYv5RklHGG7XZKuwTrClKygqv6smAdsB8uLhmn_r52AsU39FR0tXNw-YV93g79yjfyTxT3h1HTh-1DCMf0amXVVcKXP9omsZNp-CHyVhZFZVSzhxFBczazl71SUnVEpPS6CYqjaJNs61b31kATDFY0AlKTk5CKcvK1XRoXsZD16xl8_teiPdBPeX_P0UntrMCssYXXAaxGoihc_mr_y-LE-cewb1yP2VR8hpK5_nKVKndUq5Khq",
    title: "Pheromone Trails: Why Mice Keep Coming Back",
    date: "Wednesday, Jun 4, 2025",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_oQFbNfZY2DSctGI93b2Ioh4RuXa74biik3FlpT9QiToG5en8HkqxNGD7Ni0LbyoR5QYs8BS1sr26SyJlx5pfaN4QVDNIbeOSsVzfYB_xfdpJH5csCk2NiwwNVCvQNACeRD2tdVcWeTjcO4icL_O2CBAu3WA91DHcwyAiB2fbzq3jBMCWWaqbRMaEKG2IliGFFu43nGUg2E5v_e4xR10994MDJh2Du1wCRXfYXoua8pDgQcwJAw36pCHQj1xyND1gwW8H7f2xvCwH",
    title: "DIY Rodent Inspection: A Room-by-Room Checklist",
    date: "Monday, May 12, 2025",
  },
];

const ArticlesSection = () => {
  return (
    <>
      <section className="w-full bg-background py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-swiss-light-text font-bold uppercase tracking-widest text-xs mb-2 block">WHAT WE DO</span>
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-foreground">Popular Articles</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden mb-8">
                <img
                  alt="How to Catch a Mouse"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1H7Kf6oi6ZMhouhndP3qWfnnllhhB7jPKObAJCdCm77t-55Qtc0yEmk_LfQFgirKAvkZ9OHzEJh-6aExlMUG-QSsCtEiUle36VEFg_3eWF8eIPykqiN4T_mGu9c4qlGGyrBz2f2ORcO3OKToe5twKN4qKD-qnnIgPfw3KLPz4MdtfXcLVLu_56C8zPR9tV95rYNDn9jb66py711nsLNQaqNkFFmvIrhm1lHlf4VPhc9rHdLeFIg_KoI0hc3LY9WvP2bH13onGIFzG"
                />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6 hover:text-primary transition-colors uppercase tracking-tight">
                How to Catch a Mouse: Best Strategies &amp; Tools
              </h3>
              <div>
                <span className="bg-swiss-grey text-[10px] font-bold uppercase tracking-widest px-4 py-2 inline-block">Species</span>
              </div>
            </div>
            <div className="flex flex-col space-y-12">
              {popularSideArticles.map((article, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  <div className="w-1/3 aspect-[4/3] flex-shrink-0 overflow-hidden">
                    <img alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={article.img} />
                  </div>
                  <div className="flex flex-col justify-start">
                    <h4 className="text-xl font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">{article.title}</h4>
                    <p className="text-swiss-light-text text-sm line-clamp-2 mb-4">{article.desc}</p>
                    <div>
                      <span className="bg-swiss-grey text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 inline-block">Species</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-swiss-light-text font-bold uppercase tracking-widest text-xs mb-2 block">WHAT WE DO</span>
            <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-foreground">Latest Knowledge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestKnowledge.map((article, i) => (
              <div key={i} className="flex flex-col">
                <div className="aspect-[4/3] bg-muted overflow-hidden mb-6">
                  <img alt={article.title} className="w-full h-full object-cover" src={article.img} />
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-4 hover:text-primary cursor-pointer transition-colors">{article.title}</h3>
                <div className="mt-auto">
                  <span className="bg-swiss-grey text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 inline-block">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesSection;
