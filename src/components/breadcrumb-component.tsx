import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/router";

export function BreadcrumbComponent() {
  const router = useRouter();
  const { asPath } = router;

  // Split the path into parts and filter out any empty strings
  const pathParts = asPath.split('/').filter(part => part);

  // Create breadcrumb items based on the path
  const breadcrumbItems = pathParts.map((part, index) => {
    // Construct the href by joining the path parts up to the current index
    const href = '/' + pathParts.slice(0, index + 1).join('/');
    // Capitalize the first letter of the part
    const label = part.charAt(0).toUpperCase() + part.slice(1);

    return (
      <React.Fragment key={href}>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
        </BreadcrumbItem>
      </React.Fragment>
    );
  });

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbItems}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
