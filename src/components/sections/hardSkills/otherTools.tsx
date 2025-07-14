import { Section } from "../../section";
import docker from "@assets/images/badges/docker.webp";
import kafka from "@assets/images/badges/kafka.webp";
import k8 from "@assets/images/badges/k8.webp";
import linux from "@assets/images/badges/linux.webp";
import redis from "@assets/images/badges/redis.webp"
import os from "@assets/images/badges/os.webp";
import { Stack } from "../../stack";

const description = (
  <div className="section__description">
    <Stack name="Linux" img={linux} />
    <Stack name="Docker" img={docker} />
    <Stack name="Kubernetes" img={k8} />
    <Stack name="Kafka" img={kafka} />
    <Stack name="Redis" img={redis} />
    <Stack name="Open Source Contributor" img={os} />
  </div>
);

export const SectionOtherTools = () => (
  <Section title="Other tools" description={description} hierarchy={2} />
);
