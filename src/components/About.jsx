import React from "react";
import { Code, Database, Server, Layers } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-12 lg:px-20 bg-background text-foreground"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

        <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          I am an Associate Engineering Analyst with hands-on experience in SQL,
          ETL, Oracle, PostgreSQL, and Amazon Redshift. I specialize in data
          migration, data transformation, stored procedure development, data
          validation, and query optimization while working with large-scale
          datasets and real-world business requirements.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Journey */}
        <div
          className="md:col-span-2 lg:col-span-1 bg-gray-900/80 p-7 rounded-2xl
                     border border-gray-800 hover:border-teal-500/40
                     hover:shadow-[0_0_20px_#14b8a6aa]
                     transition-all duration-300 hover:-translate-y-2
                     backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-teal-400 mb-3">
            My Journey
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            My journey began with web development and gradually evolved into
            database development and data engineering. Through my internship and
            full-time role, I have gained practical experience in SQL, ETL, data
            migration, customer data mapping, and database management.
          </p>
        </div>

        {/* SQL Development */}
        <div
          className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800
                     hover:border-teal-500/40
                     hover:shadow-[0_0_15px_#14b8a6aa]
                     transition-all duration-300 hover:-translate-y-2
                     backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Code className="text-teal-400 animate-pulse" size={22} />

            <h3 className="font-semibold text-lg">SQL Development</h3>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            I develop and optimize SQL queries, create stored procedures, and
            design database objects to improve performance and support business
            requirements.
          </p>
        </div>

        {/* ETL Development */}
        <div
          className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800
                     hover:border-teal-500/40
                     hover:shadow-[0_0_15px_#14b8a6aa]
                     transition-all duration-300 hover:-translate-y-2
                     backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Server className="text-teal-400 animate-pulse" size={22} />

            <h3 className="font-semibold text-lg">ETL Development</h3>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            I design ETL workflows for extracting, transforming, validating, and
            loading data across multiple database systems while ensuring data
            quality and consistency.
          </p>
        </div>

        {/* Database Management */}
        <div
          className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800
                     hover:border-teal-500/40
                     hover:shadow-[0_0_15px_#14b8a6aa]
                     transition-all duration-300 hover:-translate-y-2
                     backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Database className="text-teal-400 animate-pulse" size={22} />

            <h3 className="font-semibold text-lg">Database Management</h3>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            I work with Oracle, PostgreSQL, and Amazon Redshift to manage,
            process, validate, and optimize large datasets while maintaining
            data integrity and database performance.
          </p>
        </div>

        {/* Data Engineering */}
        <div
          className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800
                     hover:border-teal-500/40
                     hover:shadow-[0_0_15px_#14b8a6aa]
                     transition-all duration-300 hover:-translate-y-2
                     backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Layers className="text-teal-400 animate-pulse" size={22} />

            <h3 className="font-semibold text-lg">Data Engineering</h3>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            I create staging tables, implement customer data mapping, perform
            duplicate detection, and ensure accurate data migration using modern
            database technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
