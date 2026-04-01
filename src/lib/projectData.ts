import { Server, Shield, CreditCard, Database, Layout, Code2, Layers, Workflow } from "lucide-react";
import { createElement } from "react";
import type { GalleryImage } from "@/components/ImageGallery";

export interface ProjectDetail {
  slug: string;
  title: string;
  desc: string;
  overview: string;
  features: { icon: string; label: string }[];
  techStack: { label: string; color: "blue" | "green" | "purple" | "orange" | "red" }[];
  tech: string[];
  github?: string;
  demo?: string;
  images: GalleryImage[];
}

export const iconMap: Record<string, any> = {
  Layout, Shield, Database, Layers, Workflow, CreditCard, Server, Code2,
};

export const techColors: Record<string, string> = {
  blue: "bg-primary/15 text-primary border-primary/25",
  green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  purple: "bg-violet-500/15 text-violet-400 border-violet-500/25",
  orange: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  red: "bg-rose-500/15 text-rose-400 border-rose-500/25",
};

export const projects: ProjectDetail[] = [
  {
    slug: "mobile-bay-center",
    title: "Mobile Bay Center",
    desc: "A full-featured e-commerce and inventory management platform built with ASP.NET Core MVC. Customers can browse, search, and explore mobile devices through a dynamic product catalog, while administrators gain complete control over inventory via a powerful dashboard. Features responsive UI with Bootstrap, robust data persistence using Entity Framework Core and SQL Server, and streamlined order management — demonstrating expertise in MVC architecture, database design, and scalable web applications with clean separation of concerns.",
    overview: "A full-featured e-commerce and inventory management platform. Customers can browse, search, and explore mobile devices while administrators manage inventory via a powerful dashboard.",
    features: [
      { icon: "Layout", label: "Responsive Product Catalog with Search & Filters" },
      { icon: "Shield", label: "Admin Dashboard with Inventory Management" },
      { icon: "Database", label: "Entity Framework Core with SQL Server" },
      { icon: "Layers", label: "MVC Architecture with Clean Separation" },
      { icon: "Workflow", label: "Streamlined Order Management System" },
    ],
    techStack: [
      { label: ".NET Core 8", color: "purple" },
      { label: "C#", color: "green" },
      { label: "SQL Server", color: "red" },
      { label: "Entity Framework Core", color: "blue" },
      { label: "Bootstrap 5", color: "orange" },
    ],
    tech: [".NET Core 8", "C#", "SQL Server", "Entity Framework Core", "Bootstrap 5"],
    github: "https://github.com/AhmedEltamalawii/MWBAYLY",
    demo: "https://youtu.be/u_Qa-Yv5bow",
    images: [
      { src: "/placeholder.svg", title: "Home Page", description: "Main landing page with product showcase", category: "screenshot" },
      { src: "/placeholder.svg", title: "Product Catalog", description: "Browse and filter mobile devices", category: "screenshot" },
      { src: "/placeholder.svg", title: "Admin Dashboard", description: "Inventory management panel", category: "screenshot" },
      { src: "/placeholder.svg", title: "Mobile View", description: "Responsive mobile layout", category: "mobile" },
      { src: "/placeholder.svg", title: "Architecture", description: "System architecture diagram", category: "diagram" },
    ],
  },
  {
    slug: "fastfood-restaurant-system",
    title: "FastFood Restaurant System",
    desc: "A high-performance restaurant solution built with .NET 8, designed for fast-food chains to manage high-volume orders, inventory, and customer relationships. Implements Clean Architecture with Repository and Unit of Work patterns. Security is handled through ASP.NET Core Identity with role-based access for Administrators, Restaurant Managers, and Customers. Features an intelligent shopping cart, flexible discount engine with coupon support, full CRUD for menu items and categories, order tracking, and a responsive Bootstrap interface — showcasing modern .NET development, secure authentication, and enterprise architecture.",
    overview: "A high-performance restaurant solution for fast-food chains to manage orders, inventory, and customer relationships with Clean Architecture patterns.",
    features: [
      { icon: "Shield", label: "Role-Based Access Control (Admin, Manager, Customer)" },
      { icon: "CreditCard", label: "Smart Shopping Cart with Discount Engine" },
      { icon: "Layers", label: "Repository & Unit of Work Patterns" },
      { icon: "Code2", label: "Clean Architecture with Separation of Concerns" },
      { icon: "Database", label: "Full CRUD for Menu Items & Categories" },
    ],
    techStack: [
      { label: "ASP.NET Core 8", color: "purple" },
      { label: "MVC/Web API", color: "blue" },
      { label: "SQL Server", color: "red" },
      { label: "Entity Framework Core", color: "green" },
      { label: "Bootstrap 5", color: "orange" },
    ],
    tech: ["ASP.NET Core 8", "MVC/Web API", "SQL Server", "Entity Framework Core", "Bootstrap 5"],
    github: "",
    demo: "https://youtu.be/63x99CnNrp4",
    images: [
      { src: "/images/fastfood-home.png", title: "Home & Menu", description: "Welcome page with product catalog", category: "screenshot" },
      { src: "/images/fastfood-product.png", title: "Product Details", description: "Item details with add to cart", category: "screenshot" },
      { src: "/images/fastfood-cart.png", title: "Shopping Cart", description: "Cart with promo codes & discounts", category: "screenshot" },
      { src: "/images/fastfood-admin.png", title: "Admin Item List", description: "Admin CRUD for menu items", category: "screenshot" },
      { src: "/images/fastfood-discounts.png", title: "Discounts Management", description: "Admin discount & coupon system", category: "screenshot" },
      { src: "/images/fastfood-order.png", title: "Order Summary", description: "Payment success & order details", category: "screenshot" },
    ],
  },
  {
    slug: "ecommerce-api-system",
    title: "E-Commerce API System",
    desc: "A robust backend API solution designed to power modern e-commerce applications. Built on clean architecture principles, the system delivers secure, scalable endpoints for complete online store operations. Core functionality includes JWT-based authentication with distinct roles for Administrators and Customers, full CRUD operations for products and categories, persistent shopping cart management, and seamless Stripe payment processing. Additional features include automated email notifications for order confirmations and account activities, plus comprehensive user profile management allowing customers to update personal information and view order history. The API demonstrates expertise in secure authentication, payment integration, and service-based architecture.",
    overview: "A robust backend API solution powering modern e-commerce applications with secure endpoints for complete online store operations.",
    features: [
      { icon: "Shield", label: "JWT Authentication with Admin & Customer Roles" },
      { icon: "CreditCard", label: "Stripe Payment Processing Integration" },
      { icon: "Server", label: "RESTful API with Clean Architecture" },
      { icon: "Database", label: "Persistent Shopping Cart Management" },
      { icon: "Workflow", label: "Automated Email Notifications" },
    ],
    techStack: [
      { label: "ASP.NET Core", color: "purple" },
      { label: "SQL Server", color: "red" },
      { label: "JWT", color: "green" },
      { label: "Stripe", color: "blue" },
      { label: "Clean Architecture", color: "orange" },
    ],
    tech: ["ASP.NET Core", "SQL Server", "JWT", "Entity Framework", "Stripe", "Clean Architecture"],
    github: "https://github.com/AhmedEltamalawii/Ecommerce-APIS",
    demo: "",
    images: [
      { src: "/placeholder.svg", title: "API Endpoints", description: "Swagger documentation", category: "screenshot" },
      { src: "/placeholder.svg", title: "Auth Flow", description: "JWT authentication flow", category: "diagram" },
      { src: "/placeholder.svg", title: "API Architecture", description: "System architecture overview", category: "diagram" },
    ],
  },
  {
    slug: "task-management-system",
    title: "Task Management System",
    desc: "A team productivity application built with ASP.NET MVC that streamlines task tracking and project collaboration. Features role-based authentication distinguishing Admin, Manager, and Team Member permissions, efficient database design for optimal performance, and intuitive task assignment workflows. Users can create, assign, track, and update tasks with priority levels, due dates, and status tracking. Built with .NET, SQL Server, and clean MVC architecture following industry best practices.",
    overview: "A team productivity application that streamlines task tracking and project collaboration with role-based permissions.",
    features: [
      { icon: "Shield", label: "Admin, Manager & Team Member Roles" },
      { icon: "Workflow", label: "Task Assignment & Priority Workflows" },
      { icon: "Database", label: "Optimized Database Design" },
      { icon: "Layout", label: "Intuitive Task Board Interface" },
    ],
    techStack: [
      { label: "ASP.NET MVC", color: "purple" },
      { label: ".NET", color: "blue" },
      { label: "SQL Server", color: "red" },
      { label: "Role-Based Auth", color: "green" },
    ],
    tech: ["ASP.NET MVC", ".NET", "SQL Server", "Role-Based Auth"],
    github: "https://github.com/AhmedEltamalawii/ToDoList",
    demo: "https://youtu.be/E7J4JPFN69c",
    images: [
      { src: "/placeholder.svg", title: "Task Board", description: "Main task management view", category: "screenshot" },
      { src: "/placeholder.svg", title: "Mobile Tasks", description: "Mobile responsive view", category: "mobile" },
    ],
  },
  {
    slug: "educational-academy",
    title: "Educational Academy",
    desc: "A comprehensive Learning Management System (LMS) built with Python Flask. The platform enables students to register, log in, enroll in courses, and access lessons, while administrators maintain full control over courses, lessons, tasks, and users. Features include secure authentication, profile management with image upload, course enrollment tracking, and complete CRUD operations for all educational content. Demonstrates full-stack development with Flask, database relationships, and role-based access control.",
    overview: "A comprehensive LMS enabling students to enroll in courses and access lessons, while administrators control all educational content.",
    features: [
      { icon: "Shield", label: "Secure Authentication & Profile Management" },
      { icon: "Database", label: "Course Enrollment Tracking System" },
      { icon: "Layout", label: "Complete CRUD for Courses & Lessons" },
      { icon: "Workflow", label: "Image Upload & Profile Customization" },
    ],
    techStack: [
      { label: "Python", color: "blue" },
      { label: "Flask", color: "green" },
      { label: "SQLAlchemy", color: "red" },
      { label: "Bootstrap", color: "orange" },
    ],
    tech: ["Python", "Flask", "SQLAlchemy", "HTML/CSS", "Bootstrap"],
    github: "https://github.com/AhmedEltamalawii/School-Acadmy-",
    demo: "https://youtu.be/pKhvfYncqI0",
    images: [
      { src: "/placeholder.svg", title: "Course Catalog", description: "Browse available courses", category: "screenshot" },
      { src: "/placeholder.svg", title: "Student Dashboard", description: "Student enrolled courses", category: "screenshot" },
      { src: "/placeholder.svg", title: "Mobile View", description: "Responsive mobile layout", category: "mobile" },
    ],
  },
  {
    slug: "coffee-center",
    title: "Coffee Center",
    desc: "A responsive coffee shop website built with pure HTML and CSS, showcasing modern web design principles. Features a clean, inviting layout that adapts seamlessly to all screen sizes from mobile to desktop. The site includes intuitive navigation, appealing visual design, and is hosted live on Firebase for reliable global access. Demonstrates proficiency in front-end development, responsive design techniques, and Firebase deployment.",
    overview: "A responsive coffee shop website showcasing modern web design principles with clean layout that adapts to all screen sizes.",
    features: [
      { icon: "Layout", label: "Fully Responsive Design for All Devices" },
      { icon: "Code2", label: "Pure HTML & CSS Implementation" },
      { icon: "Server", label: "Firebase Deployment & Hosting" },
      { icon: "Layers", label: "Clean Visual Hierarchy & Navigation" },
    ],
    techStack: [
      { label: "HTML", color: "orange" },
      { label: "CSS", color: "blue" },
      { label: "Responsive Design", color: "green" },
      { label: "Firebase", color: "red" },
    ],
    tech: ["HTML", "CSS", "Responsive Design", "Firebase"],
    github: "",
    demo: "https://coffee-spark-sample-app-cd78d.web.app",
    images: [
      { src: "/images/coffee-home.png", title: "Landing Page", description: "Coffee shop homepage with hero section", category: "screenshot" },
      { src: "/images/coffee-menu.png", title: "Menu Section", description: "Popular menu items display", category: "screenshot" },
      { src: "/images/coffee-testimonials.png", title: "Testimonials & Reservation", description: "Client reviews and booking area", category: "screenshot" },
    ],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
