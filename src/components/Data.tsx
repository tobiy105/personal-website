export interface ProjectData {
    id: number;
    title: string;
    desc: string;
    imgs: string[];
    tags: string[];
    extra_desc: string;
    extra_imgs: string[];
  }
  
  export const data: ProjectData[] = [
    {
      id: 0,
      title: 'BCFY - Car Buying Assistant App',
      desc: 'An ongoing project developing a serverless car buying assistant app with secure user registration and personalized recommendations.',
      extra_desc: 'This application is built using AWS services like Cognito for secure user management, Lambda for serverless functions, and DynamoDB for data management. The frontend is developed with TypeScript and Angular. The app provides personalized car recommendations based on user preferences, with a focus on continuous improvement through user feedback.',
      imgs: ['/BCFY.webp', '/BCFY-intial-search.webp', '/BCFY-search-result.webp'],
      extra_imgs: ['/BCFY.webp', '/BCFY-intial-search.webp', '/BCFY-search-result.webp', '/BCFY-search-result-2.webp', '/BCFY-search-result-mobile.webp'],
      tags: ['AWS', 'TypeScript', 'Angular', 'C#', 'DynamoDB', 'S3', 'Cognito'],
    },
    {
      id: 1,
      title: 'ReciPro - Recipe Finder Full Stack Java App',
      desc: 'Java-based full stack app for finding recipes with integrated nutritional information.',
      extra_desc: 'This project involved integrating the Edamam API for recipe searches and nutrient data, implementing secure user login with encrypted passwords, and supporting CRUD operations for user interactions with recipes. The backend was developed with Java Servlets and JDBC, while the frontend utilized React. Comprehensive testing and project management ensured successful delivery.',
      imgs: ['/ReciPro-home.webp', '/ReciPro-liked-recipes.webp', '/ReciPro-show-ingred.webp'],
      extra_imgs: ['/ReciPro-home.webp', '/ReciPro-liked-recipes.webp', '/ReciPro-show-ingred.webp', '/ReciPro-login.webp'],
      tags: ['Java', 'React', 'Edamam API', 'MySql', 'JDBC'],
    },
    {
      id: 2,
      title: 'Cryptic Chat',
      desc: 'Group project where we made end-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
      extra_desc: 'Group project where we made end-to-end encrypted chat app with a React and Vite frontend and a GraphQL API.',
      imgs: ['/crypticchat1.webp', '/crypticchat2.webp'],
      extra_imgs: ['/crypticchat1.webp', '/crypticchat2.webp', '/crypticchatmobview.webp', '/crypticchatmobview2.webp'],
      tags: ['Javascript', 'React', 'Python','Vite', 'Tailwind', 'GraphQL', 'Docker'],
    },
    {
      id: 3,
      title: 'Cinema Website',
      desc: 'A comprehensive web application for booking movie tickets online, complete with seat selection, payment processing, and QR code ticket generation.',
      extra_desc: 'This project allows users to search for movies, reserve seats, purchase tickets online via Stripe, and receive a ticket with a QR code by email. It also supports in-person cash payments and includes admin functions for movie database management and sales data viewing. Developed using Flask with integrations for Stripe, IMDb, and SQLite.',
      imgs: ['/Cinema-home.webp', '/Cinema-tickets.webp', '/Cinema-order.webp', '/Cinema-payment.webp'],
      extra_imgs: ['/Cinema-home.webp', '/Cinema_Research.webp', '/Cinema-Researchb.webp', '/Cinema-screen.webp',
        '/Cinema-tickets.webp', '/Cinema-basket.webp', '/Cinema-order.webp', '/Cinema-payment.webp', '/Cinema-ticket-pdf.webp'
      ],
      tags: ['Python', 'Flask', 'SQLite', 'Stripe API', 'IMDb API'],
    },
    {
      id: 4,
      title: 'Robot Biscuit Picker',
      desc: 'A simulation of a robot using a vacuum gripper to pick biscuits from a conveyor belt and place them in a box.',
      extra_desc: 'The robot uses a camera to detect the biscuits and a vacuum gripper to pick them up. The robot is controlled by a ROS node written in C++.',
      imgs: ['/robot_arm.webp', '/robot_arm2.webp', '/robot_arm3.webp'],
      extra_imgs: ['/robot_arm.webp', '/robot_arm2.webp', '/robot_arm3.webp', 
        '/robot_arm4.webp', '/robot_arm5.webp', '/robot_arm6.webp', '/robot_arm7.webp'], 
      tags: ['ROS', 'Gazebo', 'C++', 'Python', 'Computer Vison', 'Machine Learning', 'OpenCV'],
    },
    {
      id: 5,
      title: 'Web App DevOps Project',
      desc: 'A DevOps-focused project developing and deploying a web application for order management using modern cloud technologies.',
      extra_desc: 'This project involved full-stack development with Flask, HTML, CSS, and JavaScript, integrated with an Azure SQL Database and Azure Key Vault for secure management of credentials. The application was containerized with Docker and deployed on an Azure Kubernetes Service (AKS) cluster using Terraform for Infrastructure as Code (IaC). Monitoring, alerting, and secrets management were implemented to maintain application health.',
      imgs: ['/Order.webp'],
      extra_imgs: ['/Order.webp', '/New-Order.webp'],
      tags: ['Flask', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    },
    // Add more projects if needed
  ];
  