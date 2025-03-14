import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-16" id='education'>
      <h2 className="text-3xl font-bold mb-8 border-b pb-2">Education</h2>

      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-start gap-4">
            <div className="mt-1 bg-primary/10 p-2 rounded-full">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="grid gap-1">
              <CardTitle>Maulana Azad National Urdu University</CardTitle>
              <CardDescription>Hyderabad, Telangana</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <div className="font-medium">CS & IT B.Tech</div>
                <div className="text-muted-foreground">
                  Sep 2021 - July 2025
                </div>
              </div>
              <div className="text-sm">CGPA: 9.09</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start gap-4">
            <div className="mt-1 bg-primary/10 p-2 rounded-full">
              <School className="h-6 w-6 text-primary" />
            </div>
            <div className="grid gap-1">
              <CardTitle>Al-Irfan Residential School</CardTitle>
              <CardDescription>Aurangabad, Maharashtra</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <div className="font-medium">
                  PCM (Physics, Chemistry, Math) Intermediate
                </div>
                <div className="text-muted-foreground">
                  May 2019 - July 2021
                </div>
              </div>
              <div className="text-sm">Percentage: 85%</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
