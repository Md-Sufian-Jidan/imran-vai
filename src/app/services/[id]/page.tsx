import { services } from "@/lib/commonLinks";
import ServiceDetailsPage from "@/components/modules/services/ServiceDetailsPage";
import Loading from "@/app/loading";

export default async function ServiceDetails({ params }: { params: { id: string } }) {
    const { id } = await params;
    console.log("id", id);
    const singleService = services.find((s) => s.url?.split("/").pop() === id);
    console.log("singleService", singleService);

    if (!singleService) {
        return Loading();
    }

    return <ServiceDetailsPage service={singleService} />
}