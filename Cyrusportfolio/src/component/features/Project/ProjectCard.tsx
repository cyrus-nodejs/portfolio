import { Card } from "../../ui/Card";
import { CardHeader } from "../../ui/CardHeader";
import { CardTitle } from "../../ui/CardTitle";
import { CardContent } from "../../ui/CardContent";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  features,
  stack,
  github,
  live,
}: ProjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600">{description}</p>

        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          {github && (
            <a href={github} target="_blank">
              <Button variant="outline">GitHub</Button>
            </a>
          )}
          {live && (
            <a href={live} target="_blank">
              <Button>Live Demo</Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
