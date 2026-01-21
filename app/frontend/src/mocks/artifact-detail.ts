import type { ArtifactDetailData } from '../features/artifacts/types'

export const artifactDetailData: ArtifactDetailData = {
  title: 'Autonomous Arm Project: Final Presentation & Performance Analysis',
  date: 'Oct 24, 2023',
  views: 1400,
  likes: 248,
  tags: ['Robotics', 'AI'],
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC3WtEeHEDoT_8v9Yd7tdb5KweGExE24omLbn2VU7fyjm_BdhQ0lS8hRWGAnNImfX3vlZE2yNeCRCi06AHE_yZ4Xh6l0WcaKEB94-l6fVoAQYGJ3NFlsV-A7lqxTAek-mT1rhgJBijf9bbkL_QC1XjdMr7X1niNZNSwJDzVfRYQSGsS7DpZ3J0IGaq9Z_NqkBlG2aokXosEILNv5I26EOhUFIZ6YCs4xI80RRqE7ShSlhD4z7RY0Iae1vAnhMiHH16memcRkH6yeJ-c',
  author: {
    name: 'Team Alpha',
    dept: 'Engineering Dept.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACO9NFPX3tuRRZmsg-zDmyrRcZm270CNjDNbp_g3RysXQPEQLuy8pYhnYmG2bDSScEEEw66YXw7hyKLKGE40nykU15s9wp6EwfjRvpX4Gc_uV0BbzJtIyIC2byau90Vn4AVrtQWBb-PdPAvQRMwCTzB6mftqTepMB71oUky4JT4PLJYN3SfhidxytM1HJILPB0oZ6bhl3BROtEMZwouobDiH5TMP_C9qVwVRYPTy5SfNYaIeLKWz9ZjL1BPnia8vtNnx_IZzTWUYfZ',
  },
  currentUserAvatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDyt_hTxNLqx__DZvpDuHuJMc0jggYmEOWAKNw-Owl9W1zeta6w_bNrQgYr29SV9kcSSnf91divylmaBS4w7OcLY9uJUN5VglYcPcHthFRS_MJjCVUin7nRBPmVwOceeeFN4-Y02M1enQ-19ytG9mCPSaBhZytmkDExC2vukI_nYgtDLjqULrTEScFxyM957lh95EOnG7z2AlVWB3gmWN4P4KgYZoVC038QnBQAviKEaxyPixRR3sgn2-VbXtYCaz_Vcaso9UGV9Gj6',
  summary:
    'This project demonstrates a 6-axis autonomous robotic arm capable of precision assembly. Key achievements include a 98% accuracy rate in component placement and a 40% reduction in power consumption using the new motion planning algorithm.',
  body: [
    'We started this project with the goal of creating an affordable yet highly accurate robotic arm for educational purposes. After 3 months of rigorous testing and iteration, we are proud to present our final prototype.',
    'The main challenge was optimizing the inverse kinematics solver to run efficiently on embedded hardware. By switching to a numerical approach, we managed to achieve real-time performance without sacrificing precision.',
    'We hope this project inspires other students to explore the field of robotics. All source code and 3D models are available in the linked repository.',
  ],
  quote:
    'The integration of computer vision for object detection was the turning point for our automation logic.',
  comments: [
    {
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAU_Uevt1sF3Gen13SezwrujCG29Rz41fvFKZIG8S7_VuHeuIYoQdwePML98trQmqpL9R88a0ApQ0syC0o2e1JzwgmI3a6XRK45Y7Nw2ELwqn18yJRxNwPE8I3sNtRWWN-AR8dD9sU2XAsc7kyqiP0tcKrr5EdwUetSlJwRFQiZP3e4lXuFEV0KG33iq70Q_xi7W4DEn6XDOilMCPPv5Ae4yfo7rnIY3QoPWktn3dyzUWd9yYdITyy0k5aTc2NCH5wN6lvbzbnfeBWA',
      name: 'Sarah L.',
      time: '2h ago',
      text: 'The motion smoothing looks incredible! Did you use standard PID controllers for the joints or something more custom?',
      likes: 5,
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtaoDU0KEuCJ7mCpinOIK349dPCLhsbtrQXPDzZceq1pvmRLw-1lzHMxjt64Y8VqWl3VG0NIfL-oCiYNKBqtMVBTtcg66iA8veFv69HG9Hl-pVcQ66LzYrujeOlJg_VZ6-0eIJBDb5vdXTX8uJl2FX24K9ragumwoijrDv6enY0Vdr_c8emVCaYFqFcjuewmTwfoWQKW14qgbDZRaagkHHodezvKd6RIm3SLUxaB_s7Dk7WWMA9YzgquRpaGVv57dHwKKF3Ek5XXTM',
      name: 'Alex M.',
      time: '5h ago',
      text: "Great presentation. Would love to see the code repo if it's public. 🚀",
      likes: 12,
    },
  ],
}
