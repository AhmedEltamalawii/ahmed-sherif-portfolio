import { Server, Shield, CreditCard, Database, Layout, Code2, Layers, Workflow, Hotel, Mail, CalendarCheck } from "lucide-react";
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
  Layout, Shield, Database, Layers, Workflow, CreditCard, Server, Code2, Hotel, Mail, CalendarCheck,
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
    desc: "A full-featured e-commerce and inventory management platform built with ASP.NET Core MVC. Supports social login via Facebook and Google with email confirmation after registration. Role-based authorization separates Admins from Customers — admins manage users, products, categories, orders, payments, discounts, and coupons through a powerful analytics dashboard, while customers browse a dynamic catalog, track orders (pending, complete, or failed), pay by Visa or Cash, and leave product reviews. Features statistical analysis, sales growth charts, and a coupon/discount engine — built with Entity Framework Core, SQL Server, and Bootstrap, demonstrating expertise in MVC architecture, secure authentication, and enterprise-grade e-commerce.",
    overview: "A full-featured mobile e-commerce platform with social login, role-based admin/customer access, order tracking, Visa & Cash payments, reviews, discounts, coupons, and a sales analytics dashboard.",
    features: [
      { icon: "Shield", label: "Social Login (Google & Facebook) with Email Confirmation" },
      { icon: "Shield", label: "Role-Based Authorization (Admin & Customer)" },
      { icon: "Layout", label: "Product Catalog with Search, Filters & Reviews" },
      { icon: "CreditCard", label: "Payment by Visa or Cash with Order Tracking" },
      { icon: "Workflow", label: "Order Status Tracking (Pending, Complete, Failed)" },
      { icon: "Database", label: "Discounts & Coupons Management Engine" },
      { icon: "Layers", label: "Admin Dashboard with Sales Analytics & Statistics" },
    ],
    techStack: [
      { label: "ASP.NET Core MVC", color: "purple" },
      { label: "C#", color: "green" },
      { label: "SQL Server", color: "red" },
      { label: "Entity Framework Core", color: "blue" },
      { label: "Bootstrap 5", color: "orange" },
    ],
    tech: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework Core", "Bootstrap 5"],
    github: "https://github.com/AhmedEltamalawii/MWBAYLY",
    demo: "https://youtu.be/u_Qa-Yv5bow",
    images: [
      { src: "/images/mobile-login.png", title: "Login & Social Auth", description: "Login with email or Google/Facebook", category: "screenshot" },
      { src: "/images/mobile-products.png", title: "Product Catalog & Admin Sidebar", description: "Browse mobile devices with admin management panel", category: "screenshot" },
      { src: "/images/mobile-cart.png", title: "Shopping Cart & Coupons", description: "Cart with coupon codes and Visa/Cash payment options", category: "screenshot" },
      { src: "/images/mobile-payments.png", title: "Payments Tracking", description: "Track payment status: success, pending, cancelled", category: "screenshot" },
      { src: "/images/mobile-dashboard.png", title: "Sales Analytics Dashboard", description: "Real-time sales, orders, users & growth statistics", category: "screenshot" },
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
      { src: "/images/fastfood-homepage.jpg", title: "Homepage & Menu", description: "Welcome page with full menu catalog", category: "screenshot" },
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
    slug: "hotel-management-system",
    title: "Hotel Management System",
    desc: "A comprehensive hotel management platform built with ASP.NET Core MVC, designed to streamline hospitality operations from booking to checkout. Leveraging Threading and Async/Await patterns for high-performance concurrent operations, the system integrates secure Stripe payment processing for instant booking confirmations, eliminating no-show risks and stabilizing cash flow. Features automated guest communications with digital receipts, real-time room inventory management to prevent double-bookings, and a professional guest journey from first click to confirmation email. The platform demonstrates expertise in MVC architecture, asynchronous programming, payment integration, and real-time inventory systems for the hospitality industry.",
    overview: "A comprehensive hotel management platform with secure payments, real-time inventory, and automated guest communications — built with MVC, Threading & Async patterns.",
    features: [
      { icon: "CreditCard", label: "Secure Stripe Payment Processing & Instant Booking" },
      { icon: "Mail", label: "Automated Guest Communications & Digital Receipts" },
      { icon: "Database", label: "Real-Time Room Inventory Management" },
      { icon: "CalendarCheck", label: "Professional Booking Journey & Confirmation Flow" },
      { icon: "Shield", label: "Role-Based Access for Admin & Staff" },
      { icon: "Workflow", label: "Threading & Async/Await for High Performance" },
    ],
    techStack: [
      { label: "ASP.NET Core MVC", color: "purple" },
      { label: "SQL Server", color: "red" },
      { label: "Stripe", color: "blue" },
      { label: "Entity Framework", color: "green" },
      { label: "Async/Threading", color: "orange" },
    ],
    tech: ["ASP.NET Core MVC", "SQL Server", "Stripe", "Entity Framework", "Async/Threading"],
    github: "private",
    demo: "",
    images: [
      { src: "/images/hotel-search.png", title: "Hotel Search", description: "Search hotels with dates and guest selection", category: "screenshot" },
      { src: "/images/hotel-listings.png", title: "Featured Hotels", description: "Hotel listings with filters, ratings & pricing", category: "screenshot" },
      { src: "/images/hotel-rooms.png", title: "Room Catalog", description: "Available rooms with types, prices & details", category: "screenshot" },
      { src: "/images/hotel-filters.png", title: "Amenity Filters", description: "Filter by amenities, price range & star rating", category: "screenshot" },
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
