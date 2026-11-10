export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Limit Order Book",
    description: "High-performance C++ order book with price-time priority matching",
    longDescription: "A C++ limit order book with AVL-tree price levels and FIFO order queues for price-time priority. It replays LOBSTER market data and benchmarks per-symbol sharded books, sustaining ~7M operations/sec across 4 sharded books and holding 20M resting orders in ~2.1 GB of memory.",
    technologies: ["C++", "Ninja", "LOBSTER"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/ming3465/HFT-Limit_Order_Book",
  },
  {
    title: "Movie Recommendation System",
    description: "Collaborative-filtering recommender in C++, benchmarked on MovieLens",
    longDescription: "A scalable collaborative-filtering recommender using user- and item-based kNN over a Compressed Sparse Row (CSR) matrix for memory-efficient storage of the user-item ratings. Similarity-matrix construction is parallelized with a custom thread pool, and a title search returns the 10 most similar films for a query. Achieves an RMSE of 0.91 on the MovieLens 100K dataset.",
    technologies: ["C++", "Ninja", "MovieLens"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/ming3465/Movie-Recommendation-System",
  },
];

export const hobbies: Project[] = [
  {
    title: "Algorithm Reference to CP",
    description: "Reference for Competitive Programming",
    longDescription: "Contains my template, profile, and resources that I use for studying",
    technologies: ["CP BOOKS", "Algorithms"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2728&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/ming3465/CP-ALGO",
  },
  {
    title: "Cybersecurity CTF ",
    description: "Custom tools for Capture The Flag competitions",
    longDescription: "Contains links to reference as to where I study and where to practice problemsets for CTF.",
    technologies: ["Cryptography", "Network Security"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/ming3465/CTF"
  }
];
