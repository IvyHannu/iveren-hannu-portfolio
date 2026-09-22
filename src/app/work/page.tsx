"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import styles from "./work.module.css";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  id: string;
  title: string;
  role: string;
  year: string;
  image: string;
  links: ProjectLink[];
};

type Client = {
  name: string;
  role: string;
  type: string;
  image: string;
  href: string | null;
};

const projects: Project[] = [
  {
    id: "bus-lotus",
    title: "Bus Lotus",
    role: "Product Design · UX Research · Prototype · AI Assisted Build",
    year: "2026",
    image: "/bus-lotus.jpg",
    links: [
      {
        label: "View Case Study",
        href: "https://buslotus-casestudy.netlify.app/",
      },
      { label: "Visit Product", href: "https://bus-lotus.expo.app/" },
    ],
  },
  {
    id: "fgcj-y2k",
    title: "FGCJ Y2K",
    role: "Product Design · Information Architecture · Website Build",
    year: "2026",
    image: "/fgcj-y2k.jpg",
    links: [
      {
        label: "View Case Study",
        href: "https://www.behance.net/gallery/252638283/47-Messages-to-Find-One-Person-Then-I-Built-This",
      },
      { label: "Visit Website", href: "https://fgcjy2k.com/home" },
    ],
  },
  {
    id: "tuella-ai",
    title: "Tuella AI",
    role: "Product Design · UX Research · AI Product Concept",
    year: "2026",
    image: "/tuella-ai.jpg",
    links: [
      {
        label: "View Case Study",
        href: "https://www.behance.net/gallery/254130757/Tuella-AI-Designing-Trust-Before-the-First-Prompt",
      },
    ],
  },
];

const clients: Client[] = [
  {
    name: "Health Track",
    role: "Product design + build",
    type: "Patient dashboard",
    image: "/health-track.jpg",
    href: "https://www.behance.net/gallery/241939155/Health-Track-Patient-Dashboard",
  },
  {
    name: "AIW Africa",
    role: "Product design + build",
    type: "Organisation website",
    image: "/aiw-africa.jpg",
    href: "https://aiw.africa/",
  },
  {
    name: "Dija",
    role: "Product design",
    type: "Website",
    image: "/dija.jpg",
    href: "https://dijadontneedya.com/",
  },
  {
    name: "Spotify Paradox",
    role: "Concept + design",
    type: "Case study",
    image: "/spotify-paradox.jpg",
    href: "https://www.behance.net/gallery/252301019/The-Spotify-Paradox",
  },
  {
    name: "Superhost Management",
    role: "Website Design + Build",
    type: "Hospitality · Property Management",
    image: "/superhost-management.jpg",
    href: null,
  },
  {
    name: "BlueGrid",
    role: "Product Design + Build",
    type: "Dashboard · Data Platform",
    image: "/bluegrid.png",
    href: null,
  },
  {
    name: "Shadhin",
    role: "UX research + product design",
    type: "Mobile app",
    image: "/Shadhin.png",
    href: "https://play.google.com/store/apps/details?id=com.gm.shadhin&hl=en",
  },
];

function ProjectMedia({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  const getLeadProjectObjectPosition = (title: string) => {
    switch (title) {
      case "Bus Lotus":
        return "center 30%";
      case "Tuella AI":
        return "center 35%";
      default:
        return "center";
    }
  };

  return (
    <div className={styles.media}>
      {!failed && (
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 900px) 100vw, 62vw"
          className={styles.mediaImage}
          style={{ objectPosition: getLeadProjectObjectPosition(project.title) }}
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className={styles.placeholder}>
          <span className={styles.placeholderLabel}>Preview image</span>
          <span className={styles.placeholderPath}>
            Add public{project.image}
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectStage({ project }: { project: Project }) {
  return (
    <div className={styles.stage}>
      <ProjectMedia project={project} />

      <dl className={styles.meta}>
        <div className={styles.metaCell}>
          <dt>Project</dt>
          <dd>{project.title}</dd>
        </div>
        <div className={styles.metaCell}>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div className={styles.metaCell}>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div className={styles.metaCell}>
          <dt>Links</dt>
          <dd className={styles.linkRow}>
            {project.links.map((link) => (
              <Link
                key={link.label}
                className={styles.detailLink}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}

function ClientCard({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);
  const isSuperhost = client.name === "Superhost Management";
  const isBlueGrid = client.name === "BlueGrid";
  const pending = client.href === null && !isSuperhost && !isBlueGrid;

  const getObjectPosition = (name: string) => {
    switch (name) {
      case "AIW Africa":
        return "center 0%";
      case "Dija":
        return "center 0%";
      case "Superhost Management":
        return "center 0%";
      case "BlueGrid":
        return "center 20%";
      default:
        return "center";
    }
  };

  const getLinkLabel = (name: string) => {
    if (name === "Shadhin") return "VIEW ON GOOGLE PLAY";
    if (name === "Superhost Management") return "VIEW ARCHIVED PROJECT";
    if (name === "BlueGrid") return "VIEW PROJECT";
    return "Link pending";
  };

  const getLinkHref = (name: string) => {
    if (name === "Superhost Management") return "/work/superhost-management";
    if (name === "BlueGrid") return "/work/bluegrid";
    return client.href as string;
  };

  const isInternalLink = (name: string) => {
    return name === "Superhost Management" || name === "BlueGrid";
  };

  const body = (
    <>
      <div className={styles.cardMedia}>
        {!failed && (
          <Image
            src={client.image}
            alt={`${client.name} preview`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.cardImage}
            style={{ objectPosition: getObjectPosition(client.name) }}
            onError={() => setFailed(true)}
          />
        )}

        {failed && (
          <div className={styles.cardPlaceholder}>
            <span className={styles.placeholderLabel}>Preview image</span>
            <span className={styles.placeholderPath}>
              Add public{client.image}
            </span>
          </div>
        )}

        <span className={styles.cardOverlay} aria-hidden="true" />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHead}>
          <h3 className={styles.cardName}>{client.name}</h3>
          <span className={styles.cardArrow} aria-hidden="true">
            →
          </span>
        </div>
        <p className={styles.cardRole}>{client.role}</p>
        <p className={styles.cardType}>{client.type}</p>
        {pending && <span className={styles.cardPending}>{getLinkLabel(client.name)} ↗</span>}
        {isSuperhost && <span className={styles.cardPending}>{getLinkLabel(client.name)} ↗</span>}
        {isBlueGrid && <span className={styles.cardPending}>{getLinkLabel(client.name)} ↗</span>}
      </div>
    </>
  );

  if (pending) {
    return <div className={styles.card}>{body}</div>;
  }

  const linkHref = getLinkHref(client.name);
  const isInternal = isInternalLink(client.name);

  return (
    <Link
      className={styles.card}
      href={linkHref}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noreferrer"}
      aria-label={`${client.name} — ${client.type}${isInternal ? " (archived project)" : " (opens in a new tab)"}`}
    >
      {body}
    </Link>
  );
}

export default function WorkPage() {
  const [active, setActive] = useState<string | null>(projects[0].id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const activeProject = projects.find((p) => p.id === active) ?? projects[0];

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    id: string,
  ) => {
    const index = projects.findIndex((p) => p.id === id);
    let nextIndex = -1;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % projects.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + projects.length) % projects.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = projects.length - 1;
    }

    if (nextIndex >= 0) {
      event.preventDefault();
      const nextProject = projects[nextIndex];
      setActive(nextProject.id);
      document.getElementById(`tab-${nextProject.id}`)?.focus();
    }
  };

  return (
    <main className={styles.page}>
      <SiteHeader />

      <div className={styles.work}>
        <section aria-labelledby="work-heading">
          <div className={styles.opening}>
            <p className={styles.label}>Selected Work · Product + Digital</p>
            <h1 id="work-heading" className={styles.heading}>
              Work shaped by real problems, clear decisions and careful delivery.
            </h1>
          </div>

          {isMobile ? (
            <ul className={styles.accordion}>
              {projects.map((project) => {
                const open = active === project.id;
                return (
                  <li key={project.id} className={styles.accordionItem}>
                    <h2 className={styles.accordionHeading}>
                      <button
                        type="button"
                        id={`m-tab-${project.id}`}
                        className={styles.accordionButton}
                        aria-expanded={open}
                        aria-controls={`m-panel-${project.id}`}
                        onClick={() => setActive(open ? null : project.id)}
                      >
                        <span>{project.title}</span>
                        <span className={styles.accordionMark} aria-hidden="true">
                          {open ? "–" : "+"}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`m-panel-${project.id}`}
                      role="region"
                      aria-labelledby={`m-tab-${project.id}`}
                      className={`${styles.accordionPanel} ${open ? styles.accordionPanelOpen : ""}`}
                    >
                      {open && <ProjectStage project={project} />}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className={styles.experience}>
              <div
                className={styles.index}
                role="tablist"
                aria-label="Selected projects"
                aria-orientation="vertical"
              >
                {projects.map((project) => {
                  const selected = activeProject.id === project.id;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      role="tab"
                      id={`tab-${project.id}`}
                      className={styles.projectTab}
                      aria-selected={selected}
                      aria-controls="panel-work-project"
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActive(project.id)}
                      onMouseEnter={() => setActive(project.id)}
                      onFocus={() => setActive(project.id)}
                      onKeyDown={(event) => handleTabKeyDown(event, project.id)}
                    >
                      {project.title}
                    </button>
                  );
                })}
              </div>

              <div
                className={styles.viewer}
                role="tabpanel"
                id="panel-work-project"
                aria-labelledby={`tab-${activeProject.id}`}
                tabIndex={0}
              >
                <ProjectStage key={activeProject.id} project={activeProject} />
              </div>
            </div>
          )}
        </section>

        <section className={styles.clients} aria-labelledby="clients-heading">
          <div className={styles.sectionHead}>
            <h2 id="clients-heading" className={styles.sectionTitle}>
              Selected Client + Product Work
            </h2>
          </div>
          <ul className={styles.clientGrid}>
            {clients.map((client) => (
              <li key={client.name} className={styles.clientItem}>
                <ClientCard client={client} />
              </li>
            ))}
          </ul>
          <Link
            className={styles.archivePanel}
            href="https://www.behance.net/ivyhannu03"
            target="_blank"
            rel="noreferrer"
            aria-label="More work lives on Behance — explore the wider archive (opens in a new tab)"
          >
            <div className={styles.archiveContent}>
              <span className={styles.archiveKicker}>
                More Work Lives on Behance
              </span>
              <span className={styles.archiveTitle}>
                Explore the wider archive
              </span>
            </div>
            <span className={styles.archiveHandle}>
              behance.net/ivyhannu03
              <span className={styles.archiveArrow} aria-hidden="true">
                ↗
              </span>
            </span>
          </Link>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <p className={styles.footerStatement}>
            Finished here<span className={styles.period}>.</span> Ready to start?
          </p>
          <div className={styles.footerCta}>
            <span className={styles.footerRule} aria-hidden="true" />
            <Link className={styles.footerLink} href="/contact">
              Start a Conversation
            </Link>
          </div>
        </div>
        <div className={styles.wordmarkWrap} aria-hidden="true">
          <span className={styles.wordmark}>IVEREN I. HANNU</span>
        </div>
      </footer>
    </main>
  );
}
