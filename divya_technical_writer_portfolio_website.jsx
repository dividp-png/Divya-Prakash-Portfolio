import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Divya P</h1>
        <p className="text-lg text-gray-600">Technical Writer | API | Healthcare | Software Documentation</p>
      </div>

      {/* About */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            Technical Writer with experience in creating structured, compliant, and user-focused documentation across healthcare and software domains. Skilled in API documentation, validation documents, user manuals, and system integration guides.
          </p>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Core Skills</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>User Guides & Manuals</li>
            <li>API Documentation (REST, JSON)</li>
            <li>Validation Documents (Plan, Test Spec, Report)</li>
            <li>Healthcare & Medical Device Documentation</li>
            <li>System & Integration Documentation (HL7, RabbitMQ, LIS)</li>
            <li>Tools: MS Word, PDF, Basic DITA/XML</li>
          </ul>
        </CardContent>
      </Card>

      {/* Portfolio Sections */}
      <div className="grid md:grid-cols-2 gap-6">

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Validation Documentation</h3>
            <p className="text-sm text-gray-600 mt-2">
              Created validation plans, test specifications, and reports including execution results and compliance documentation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">User Documentation</h3>
            <p className="text-sm text-gray-600 mt-2">
              Developed user manuals and guides for healthcare devices and web portals with structured workflows.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">API Documentation</h3>
            <p className="text-sm text-gray-600 mt-2">
              Documented REST APIs including request/response formats, error codes, and authentication flows.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">System Integration</h3>
            <p className="text-sm text-gray-600 mt-2">
              Worked on integration documentation involving LIS systems, HL7 messaging, RabbitMQ, and Mirth channels.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Service Manuals</h3>
            <p className="text-sm text-gray-600 mt-2">
              Created installation, configuration, and troubleshooting manuals for enterprise systems.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">Content Review</h3>
            <p className="text-sm text-gray-600 mt-2">
              Reviewed and improved documentation quality through structured feedback and edits.
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Contact */}
      <Card>
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: dividp@gmail.com</p>
          <p className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/divyaprakashjain" target="_blank" className="text-blue-600 underline">https://www.linkedin.com/in/divyaprakashjain</a></p>
          <Button className="mt-4">Download Resume</Button>
        </CardContent>
      </Card>
    </div>
  );
}
