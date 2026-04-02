import { useParams, Navigate } from "react-router-dom";
import { getPageBySlug } from "@/data/pageContent";
import { ServicePageTemplate } from "@/components/service-page/ServicePageTemplate";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getPageBySlug(slug) : undefined;

  if (!page) return <Navigate to="/" replace />;

  return <ServicePageTemplate page={page} />;
};

export default ServicePage;
