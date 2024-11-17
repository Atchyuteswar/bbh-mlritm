// place files you want to import through the `$lib` alias in this folder.

 // Dummy data for TILs
 export const tils = [
    {
        id: 1,
        title: "Orientation Day & Workshop",
        description: "An Orientation Day & Workshop to get you started with Blockchain technology. You will learn to make a wallet and its functions, abilities and how to use it.",
        tags: ["Python", "Backend", "Workshop"],
        author: "Rohan Sharon",
        date: "November 23, 2024",
        status: "Open",
        difficulty: "Workshop",
        img: "https://media.licdn.com/dms/image/v2/D5603AQHLEy5Js7Q-ew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718484227248?e=1737590400&v=beta&t=FszE3jA24ra7y_-g4k0nI9y0Z3BQlMAfIelL8FRAtao"
    }
    // {
    //     id: 2,
    //     title: "React State Management with Zustand",
    //     description: "Explore a simple yet powerful state management solution for React applications using Zustand. Learn about advanced patterns, middleware, and performance optimization techniques for large-scale applications. We'll dive deep into creating custom stores, implementing middleware for logging and persistence, handling async actions, integrating with React Query, and managing complex state shapes. You'll also learn about state splitting strategies, devtools integration, and how to handle real-time updates with WebSocket integration. This comprehensive guide will help you master modern state management in React applications.",
    //     tags: ["React", "JavaScript", "State Management", "Frontend"],
    //     author: "Jane Smith",
    //     date: "March 20, 2024",
    //     status: "Open",
    //     difficulty: "Advanced"
    // },
    // {
    //     id: 3,
    //     title: "Docker Containerization Basics",
    //     description: "Get started with Docker containers and learn how to containerize your applications for consistent deployment. This comprehensive guide covers everything from basic concepts to advanced deployment strategies. You'll learn about container orchestration with Docker Compose, multi-stage builds for optimal image sizes, networking between containers, volume management for persistent data, security best practices, and how to set up continuous integration pipelines with Docker. We'll also explore container monitoring, logging solutions, and how to deploy containers to various cloud platforms including AWS, Google Cloud, and Azure.",
    //     tags: ["Docker", "DevOps", "Containers"],
    //     author: "Mike Johnson",
    //     date: "March 25, 2024",
    //     status: "Open",
    //     difficulty: "Beginner"
    // },
    // {
    //     id: 4,
    //     title: "Machine Learning with TensorFlow",
    //     description: "Introduction to building and training neural networks using TensorFlow for image classification tasks. We'll cover data preprocessing, model architecture design, training optimization, and deployment strategies in detail. This comprehensive course includes hands-on projects working with convolutional neural networks (CNNs), transfer learning with pre-trained models, data augmentation techniques, and model deployment to production environments. You'll learn about TensorFlow's advanced features including distributed training, model quantization for mobile deployment, TensorBoard for visualization, and how to handle large datasets efficiently. By the end, you'll be able to build and deploy sophisticated machine learning models for real-world applications.",
    //     tags: ["ML", "Python", "TensorFlow", "AI"],
    //     author: "Sarah Wilson",
    //     date: "April 1, 2024",
    //     status: "Open",
    //     difficulty: "Advanced"
    // },
    // {
    //     id: 5,
    //     title: "GraphQL API Development",
    //     description: "Learn to build efficient APIs using GraphQL and understand its advantages over REST. This comprehensive guide covers schema design, resolvers, mutations, subscriptions, and advanced topics like authentication and caching. We'll explore how to handle complex data relationships, implement real-time features with subscriptions, optimize query performance, and set up proper error handling. You'll also learn about integrating GraphQL with various databases, implementing pagination, handling file uploads, and deploying GraphQL APIs to production. Advanced topics include implementing DataLoader for batching and caching, handling authentication and authorization, and setting up automated testing for your GraphQL API.",
    //     tags: ["GraphQL", "API", "Backend", "Node.js"],
    //     author: "Alex Brown",
    //     date: "April 5, 2024",
    //     status: "Open",
    //     difficulty: "Intermediate"
    // }
];