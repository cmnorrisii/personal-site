import React from "react";
import {
  JsImage,
  CssImage,
  HtmlImage,
  JestImage,
  RailsImage,
  ReactImage,
  RspecImage,
  RubyImage,
  TsImage,
  TypeormImage,
  NestjsImage,
  PostgresqlImage,
  MysqlImage,
  RtlImage,
} from "../assets";

const TechStack = () => {
  const knownLanguages = [
    {
      title: "JavaScript",
      image: JsImage,
      alt: "javascript logo",
    },
    {
      title: "TypeScript",
      image: TsImage,
      alt: "typescript logo",
    },
    {
      title: "Ruby",
      image: RubyImage,
      alt: "ruby logo",
    },
    {
      title: "Rails",
      image: RailsImage,
      alt: "rails logo",
    },
    {
      title: "CSS",
      image: CssImage,
      alt: "css logo",
    },
    {
      title: "HTML",
      image: HtmlImage,
      alt: "html logo",
    },
    {
      title: "Jest",
      image: JestImage,
      alt: "jest logo",
    },
    {
      title: "React",
      image: ReactImage,
      alt: "react logo",
    },
    {
      title: "Rspec",
      image: RspecImage,
      alt: "rspec logo",
    },
    {
      title: "TypeORM",
      image: TypeormImage,
      alt: "typeorm logo",
    },
    {
      title: "NestJS",
      image: NestjsImage,
      alt: "nest js logo",
    },
    {
      title: "PostgreSQL",
      image: PostgresqlImage,
      alt: "postgresql logo",
    },
    {
      title: "MySQL",
      image: MysqlImage,
      alt: "mysql logo",
    },
    {
      title: "React Testing Library",
      image: RtlImage,
      alt: "react testing library logo",
    },
  ];

  return (
    <>
      <div className="component-header">
        <h2>Tech Stack</h2>
      </div>
      <div className="tech-stack">
        {knownLanguages.map((value) => {
          return (
            <div className="tech-stack-item">
              <img
                className="tech-stack-item-image"
                src={value.image}
                alt={value.alt}
              />
              <div className="tech-stack-item-title">
                <h3>{value.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TechStack;
