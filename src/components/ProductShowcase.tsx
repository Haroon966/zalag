"use client";

import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";
import { HiArrowRight } from "react-icons/hi";
import { withBasePath } from "@/lib/paths";
import styles from "./ProductShowcase.module.css";

const products = [
  {
    name: "OmniSight Platform",
    description: "Operations clarity on autopilot",
    badge: "Enterprise AI",
  },
  {
    name: "Helix Research Studio",
    description: "Regulated research accelerated daily",
    badge: "Life Sciences",
  },
  {
    name: "NovaCommerce Engine",
    description: "Personalized commerce moments everywhere",
    badge: "Retail",
  },
  {
    name: "Atlas Field Copilot",
    description: "Field guidance without downtime",
    badge: "Industrial",
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className={styles.productsSection}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>Pre-built products</h2>
        <p className={styles.sectionSubtitle}>
          Ready-to-adapt AI building blocks that accelerate your launch timeline.
        </p>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <SpotlightCard
            key={product.name}
            className={`${styles.productCard} cursor-target`}
            spotlightColor="rgba(168, 85, 247, 0.22)"
          >
            <div className={styles.productImageWrapper}>
              <Image
                src={withBasePath("/chatsql.png")}
                alt="ChatSQL"
                width={800}
                height={400}
                className={styles.productImage}
                priority
              />
            </div>
            <div className={styles.productBody}>
              <span className={styles.productMeta}>{product.badge}</span>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <Link href="mailto:hello@nebulafoundry.ai" className={styles.productCta}>
                ask for a demo
                <HiArrowRight size={16} />
              </Link>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
