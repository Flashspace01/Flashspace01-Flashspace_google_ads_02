import { Navbar } from "@/components/layout/Navbar";
import { WorkspaceCategories } from "@/components/sections/WorkspaceCategories";
import { PopularWorkspaces } from "@/components/sections/PopularWorkspaces";
import { WorkWhereYouThrive } from "@/components/sections/WorkWhereYouThrive";

const GetWorkspaces = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {/* Page Header */}
        <section className="py-16 px-4 text-center bg-muted/30">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find Your Perfect Workspace
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore flexible workspace solutions across India — from hot desks to private offices,
            meeting rooms to virtual offices.
          </p>
        </section>

        <WorkspaceCategories />
        <WorkWhereYouThrive />
        <PopularWorkspaces />
      </main>
    </div>
  );
};

export default GetWorkspaces;
