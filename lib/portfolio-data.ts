/**
 * Static data for the Cloud Infrastructure Monitoring Dashboard.
 * UI demonstration only — no backend, APIs, or database required.
 */

export const profile = {
  name: 'Cloud-Pulses',
  roles: ['Infrastructure Monitoring', 'DevOps Dashboard'],
  tagline: 'Monitor infrastructure. Track deployments. Stay operational.',
  email: 'admin@cloudpulse.local',
  linkedin: '#',
  github: '#',
}

export const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Deployments', href: '#deployments' },
  { label: 'Monitoring', href: '#monitoring' },
  { label: 'Activity Logs', href: '#activity' },
]

export const about = {
  heading: 'Infrastructure Overview',
  paragraphs: [
    'CloudPulse provides a unified view of application infrastructure, resource utilization, container health, and deployment activity.',
    'This dashboard displays representative monitoring data for a demonstration environment. All metrics and events are static sample values intended for UI presentation.',
  ],
  interests: [
    'Container Monitoring',
    'Resource Utilization',
    'Deployment Tracking',
    'Application Health',
    'Infrastructure Analytics',
    'System Reliability',
  ],
}

export const experience = [
  {
    company: 'Production Cluster',
    role: 'Kubernetes Environment',
    period: 'Demo Environment',
    description:
      'A sample infrastructure environment containing application workloads, containerized services, and deployment resources.',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Linux'],
  },
]

export const achievements = [
  {
    tag: 'Availability',
    title: '99.95% Service Availability',
    description:
      'Illustrative availability metric for the selected monitoring period.',
  },
  {
    tag: 'Deployments',
    title: '128 Successful Deployments',
    description:
      'Sample deployment count showing the activity of the release pipeline.',
  },
  {
    tag: 'Infrastructure',
    title: '12 Monitored Instances',
    description:
      'Representative count of monitored compute instances in the dashboard.',
  },
  {
    tag: 'Containers',
    title: '24 Running Containers',
    description:
      'Example container inventory across the demonstration environment.',
  },
  {
    tag: 'Performance',
    title: '42 ms Average Response',
    description:
      'Illustrative application response time for the monitoring overview.',
  },
  {
    tag: 'Monitoring',
    title: 'All Core Services Healthy',
    description:
      'A sample system-health status displayed for UI demonstration purposes.',
  },
]

export type Project = {
  category: string
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  Paperlink?: string
}

export const projects: Project[] = [
  {
    category: 'Infrastructure',
    title: 'Production Cluster',
    description:
      'A demonstration Kubernetes cluster showing application workloads, service discovery, and container health.',
    technologies: ['Kubernetes', 'Docker', 'Linux'],
  },
  {
    category: 'CI/CD',
    title: 'Automated Release Pipeline',
    description:
      'A sample continuous integration and deployment workflow covering source updates, image builds, and application releases.',
    technologies: ['Jenkins', 'GitHub', 'Docker Hub'],
  },
  {
    category: 'Monitoring',
    title: 'Resource Utilization',
    description:
      'A static overview of CPU utilization, memory consumption, response times, and infrastructure capacity.',
    technologies: ['Metrics', 'Analytics', 'Visualization'],
  },
  {
    category: 'Reliability',
    title: 'Service Health Monitor',
    description:
      'A UI demonstration of service availability, health indicators, recent events, and operational status.',
    technologies: ['Health Checks', 'Containers', 'Monitoring'],
  },
]

export const skills = [
  {
    group: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Linux', 'Container Management'],
  },
  {
    group: 'CI/CD',
    items: ['Jenkins', 'GitHub', 'Docker Hub', 'Build Pipelines'],
  },
  {
    group: 'Monitoring',
    items: ['CPU Metrics', 'Memory Metrics', 'Service Health', 'Analytics'],
  },
  {
    group: 'Networking',
    items: ['Services', 'NodePort', 'HTTP', 'Reverse Proxy'],
  },
]

export const education = [
  {
    degree: 'Infrastructure Dashboard',
    institution: 'CloudPulse Demonstration Environment',
    year: '2026',
  },
  {
    degree: 'Application Deployment',
    institution: 'Docker and Kubernetes',
    year: '2026',
  },
]

/**
 * Dashboard-specific static data.
 * Components can import these arrays to render dashboard widgets.
 */

export const dashboardStats = [
  {
    label: 'Total Servers',
    value: '12',
    change: '+2 this month',
    status: 'healthy',
    icon: 'server',
  },
  {
    label: 'Running Containers',
    value: '24',
    change: '2 stopped',
    status: 'healthy',
    icon: 'container',
  },
  {
    label: 'CPU Utilization',
    value: '42%',
    change: '−5% from last hour',
    status: 'normal',
    icon: 'cpu',
  },
  {
    label: 'Memory Usage',
    value: '68%',
    change: '+3% from last hour',
    status: 'warning',
    icon: 'memory',
  },
]

export const infrastructure = [
  {
    id: 'SRV-001',
    name: 'Web Server Alpha',
    address: '10.0.1.11',
    region: 'Mumbai, India',
    type: 'Web Server',
    cpu: 38,
    memory: 62,
    status: 'Healthy',
    uptime: '24d 12h',
  },
  {
    id: 'SRV-002',
    name: 'API Server Beta',
    address: '10.0.1.12',
    region: 'Mumbai, India',
    type: 'Application Server',
    cpu: 67,
    memory: 74,
    status: 'Healthy',
    uptime: '18d 06h',
  },
  {
    id: 'SRV-003',
    name: 'Worker Node Gamma',
    address: '10.0.2.21',
    region: 'Singapore',
    type: 'Kubernetes Node',
    cpu: 82,
    memory: 86,
    status: 'Warning',
    uptime: '12d 19h',
  },
  {
    id: 'SRV-004',
    name: 'Database Node Delta',
    address: '10.0.2.22',
    region: 'Singapore',
    type: 'Database Server',
    cpu: 29,
    memory: 51,
    status: 'Healthy',
    uptime: '31d 03h',
  },
  {
    id: 'SRV-005',
    name: 'Cache Server Epsilon',
    address: '10.0.3.14',
    region: 'Frankfurt',
    type: 'Cache Server',
    cpu: 0,
    memory: 0,
    status: 'Offline',
    uptime: '—',
  },
]

export const deployments = [
  {
    id: 'DEP-1048',
    application: 'web-frontend',
    version: 'v2.8.1',
    environment: 'Production',
    status: 'Successful',
    author: 'deployment-bot',
    time: '2 minutes ago',
    duration: '1m 42s',
  },
  {
    id: 'DEP-1047',
    application: 'api-service',
    version: 'v1.14.0',
    environment: 'Production',
    status: 'Successful',
    author: 'release-manager',
    time: '28 minutes ago',
    duration: '2m 16s',
  },
  {
    id: 'DEP-1046',
    application: 'worker-service',
    version: 'v3.2.4',
    environment: 'Staging',
    status: 'Failed',
    author: 'deployment-bot',
    time: '1 hour ago',
    duration: '48s',
  },
  {
    id: 'DEP-1045',
    application: 'authentication',
    version: 'v2.1.7',
    environment: 'Production',
    status: 'Successful',
    author: 'release-manager',
    time: '3 hours ago',
    duration: '1m 54s',
  },
  {
    id: 'DEP-1044',
    application: 'web-frontend',
    version: 'v2.8.0',
    environment: 'Production',
    status: 'Successful',
    author: 'deployment-bot',
    time: '5 hours ago',
    duration: '1m 37s',
  },
]

export const resourceUsage = [
  { time: '09:00', cpu: 35, memory: 54 },
  { time: '10:00', cpu: 42, memory: 58 },
  { time: '11:00', cpu: 38, memory: 56 },
  { time: '12:00', cpu: 51, memory: 61 },
  { time: '13:00', cpu: 46, memory: 63 },
  { time: '14:00', cpu: 57, memory: 66 },
  { time: '15:00', cpu: 42, memory: 68 },
]

export const activityLogs = [
  {
    id: 1,
    type: 'success',
    title: 'Deployment completed',
    description: 'web-frontend v2.8.1 deployed successfully.',
    time: '2 minutes ago',
  },
  {
    id: 2,
    type: 'warning',
    title: 'High memory utilization',
    description: 'Worker Node Gamma reached 86% memory usage.',
    time: '14 minutes ago',
  },
  {
    id: 3,
    type: 'info',
    title: 'Build pipeline completed',
    description: 'CI pipeline finished for api-service.',
    time: '28 minutes ago',
  },
  {
    id: 4,
    type: 'error',
    title: 'Deployment failed',
    description: 'worker-service v3.2.4 failed in staging.',
    time: '1 hour ago',
  },
  {
    id: 5,
    type: 'success',
    title: 'Health check passed',
    description: 'Database Node Delta responded successfully.',
    time: '2 hours ago',
  },
]

export const serviceHealth = [
  { name: 'Web Frontend', status: 'Operational', latency: '42 ms', uptime: '99.98%' },
  { name: 'API Gateway', status: 'Operational', latency: '68 ms', uptime: '99.95%' },
  { name: 'Authentication', status: 'Operational', latency: '35 ms', uptime: '99.99%' },
  { name: 'Worker Service', status: 'Degraded', latency: '186 ms', uptime: '98.72%' },
  { name: 'Cache Service', status: 'Operational', latency: '12 ms', uptime: '99.97%' },
]
