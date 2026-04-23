import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";
import { pricingTable } from "@/lib/commonLinks";
import SectionWrapper from "@/components/shared/SectionWrapper";

const renderCell = (val: string | boolean) => {
    if (typeof val === "boolean") {
        return val ? <Check className="mx-auto text-primary-teal" size={20} strokeWidth={3} /> : <span className="text-border/40">—</span>;
    }
    return <span className="text-sm font-bold text-black uppercase tracking-tight">{val}</span>;
};

export const PricingComparison = () => (
    <SectionWrapper className="py-20" containerClassName="px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-black text-black uppercase tracking-tighter mb-4">Compare Features</h2>
            <p className="text-[#999999] font-medium">Find the perfect match for your production complexity.</p>
        </div>
        <div className="rounded-[2.5rem] border border-border bg-white overflow-hidden shadow-xl shadow-slate-200/50">
            <Table>
                <TableHeader className="bg-slate-50">
                    <TableRow className="border-b border-border hover:bg-transparent">
                        <TableHead className="w-[350px] font-black uppercase tracking-widest text-[10px] text-black h-16 px-10">Service Category</TableHead>
                        <TableHead className="text-center font-black uppercase tracking-widest text-[10px] text-black">Basic</TableHead>
                        <TableHead className="text-center font-black uppercase tracking-widest text-[10px] text-black">Standard</TableHead>
                        <TableHead className="text-center font-black uppercase tracking-widest text-[10px] text-black">Premium</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pricingTable.map((row) => (
                        <TableRow key={row.label} className="hover:bg-primary-teal/5 transition-colors border-b border-border/50">
                            <TableCell className="font-bold text-black py-6 px-10 uppercase text-xs tracking-tight">{row.label}</TableCell>
                            <TableCell className="text-center">{renderCell(row.basic)}</TableCell>
                            <TableCell className="text-center">{renderCell(row.standard)}</TableCell>
                            <TableCell className="text-center">{renderCell(row.premium)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </SectionWrapper>
);