// Images served from public/assets/projects via Vite
// Note: Replace placeholder images with actual project screenshots when available
const vrWalkthroughImg = '/assets/projects/vr-walkthrough.jpg';
const aiChatbotImg = '/assets/projects/ai-chatbot-unity.jpg';
const arCarShowcaseImg = '/assets/projects/ar-car-showcase.jpg';
const arStoryImg = '/assets/projects/ar-story-placeholder.jpg';

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "ar", name: "Augmented Reality" },
  { id: "vr", name: "Virtual Reality" },
  { id: "ai", name: "AI Integration" },
];

export const projects = [
  {
    id: "vr-walkthrough",
    title: "VR Walkthrough",
    shortTitle: "XR Interaction Toolkit // Unity 6",
    description: "A Unity-based Virtual Reality project for exploring 3D environments using XR Interaction Toolkit with teleportation locomotion. Features XR Origin setup, VR camera configuration, controller interactions, and OpenXR configuration for Meta Quest compatibility. Currently in development with locomotion refinements underway.",
    fullDescription: "VR Walkthrough is a virtual reality environment developed using Unity 6 and the XR Interaction Toolkit. The project focuses on core VR scene setup: XR Origin and VR camera configuration, VR controller and interaction setup, locomotion and teleportation systems, and OpenXR configuration targeting Meta Quest devices. The project uses Universal Render Pipeline (URP) for performance and has been tested extensively with the XR Device Simulator during development. Current development goals include improving VR locomotion and teleportation mechanics, refining controller input and interactions, and validating compatibility with physical Meta Quest hardware. The project structure follows Unity best practices with Git LFS for large asset management.",
    image: vrWalkthroughImg,
    category: "vr",
    categoryLabel: "Virtual Reality",
    technologies: ["Unity 6", "C#", "XR Interaction Toolkit", "Unity Input System", "OpenXR", "Meta XR SDK", "URP", "Git LFS"],
    highlights: [
      "XR Origin and VR camera rig setup for 6-DoF tracking",
      "XR Interaction Toolkit for controller-based interactions",
      "Teleportation locomotion system with visual feedback",
      "OpenXR configuration for Meta Quest 2/3/Pro compatibility",
      "Universal Render Pipeline optimized for mobile VR",
      "Tested with XR Device Simulator (physical headset validation pending)",
      "Git LFS configured for 3D asset version control"
    ],
    metrics: {
      platform: "Meta Quest / Android",
      renderPipeline: "URP",
      tracking: "6-DoF",
      locomotion: "Teleportation (WIP)",
      status: "In Development"
    },
    liveUrl: null,
    githubUrl: "https://github.com/heyharish-io/VR-Walk-Through",
    videoUrl: "https://res.cloudinary.com/icsh0jbt/video/upload/v1791874017/vr_walkthrough_w5z5ps.mp4"
  },
  {
    id: "ai-chatbot-unity",
    title: "AI Chatbot Integration in Unity",
    shortTitle: "Gemini API // Unity C#",
    description: "A standalone AI chatbot built in Unity using the Google Gemini API. Features an interactive chat interface with text input, real-time AI responses, loading states, and error handling. Demonstrates REST API integration, async/await patterns, and Unity UI best practices.",
    fullDescription: "This project demonstrates AI integration in Unity using the Gemini API via UnityWebRequest. The chatbot features a clean TextMeshPro-based chat UI with scrollable message history, user input field, and 'Ask AI' button. The implementation handles async HTTP requests, JSON serialization/deserialization, and proper error handling for network failures and API errors. The project is structured as an Android-ready Unity application with proper API key management considerations (not hardcoded). This serves as a foundation for intelligent NPCs, in-game assistants, or AR/VR voice interfaces.",
    image: aiChatbotImg,
    category: "ai",
    categoryLabel: "AI Integration",
    technologies: ["Unity", "C#", "Gemini API", "UnityWebRequest", "TextMeshPro", "Unity UI", "Android"],
    highlights: [
      "Gemini API integration via REST with UnityWebRequest",
      "Async/await pattern for non-blocking AI requests",
      "TextMeshPro chat UI with scrollable message history",
      "Loading state indicator ('Thinking...') during API calls",
      "Comprehensive error handling for network and API failures",
      "Android-ready build configuration",
      "API key security best practices documented"
    ],
    metrics: {
      platform: "Android / Standalone",
      api: "Gemini API",
      ui: "TextMeshPro",
      networking: "UnityWebRequest"
    },
    liveUrl: null,
    githubUrl: "https://github.com/heyharish-io/AI-Chatbot-Unity",
    videoUrl: "https://res.cloudinary.com/icsh0jbt/video/upload/v1791873721/ai-chatbot-video_1_esyyqe.mp4"
  },
  {
    id: "ar-car-showcase",
    title: "AR Car Showcase",
    shortTitle: "Vuforia Image Targets // Mobile AR",
    description: "An Augmented Reality car showcase built with Unity and Vuforia Engine. Detects image targets to display a 3D vehicle model in the real world with interactive AR presentation. Demonstrates Image Target tracking, 3D model visualization, and mobile AR camera integration.",
    fullDescription: "AR Car Showcase is a mobile AR experience that allows users to scan an image target and view a 3D vehicle model anchored in their real environment. Built with Unity and Vuforia Engine, the project demonstrates core AR fundamentals: Image Target detection and tracking, 3D model placement and scaling in AR space, interactive model presentation, and mobile AR camera integration. The project includes a QCAR folder for Vuforia configuration and is structured for Android deployment. This serves as a foundation for product visualization, automotive configurators, and marker-based AR experiences.",
    image: arCarShowcaseImg,
    category: "ar",
    categoryLabel: "Augmented Reality",
    technologies: ["Unity", "C#", "Vuforia Engine", "AR Foundation", "XR Packages", "URP", "Git", "Git LFS"],
    highlights: [
      "Vuforia Image Target detection and tracking",
      "3D vehicle model visualization in real-world space",
      "Interactive AR model presentation and scaling",
      "Mobile AR camera integration and session management",
      "Optimized Unity project structure for AR development",
      "Android build support with Gradle configuration",
      "Git LFS for 3D asset version control"
    ],
    metrics: {
      platform: "Android (Mobile AR)",
      tracking: "Vuforia Image Targets",
      renderPipeline: "URP",
      status: "Completed"
    },
    liveUrl: null,
    githubUrl: "https://github.com/heyharish-io/AR-Car-Showcase",
    videoUrl: "https://res.cloudinary.com/icsh0jbt/video/upload/v1791873927/ar_car_showcase_ydk5i4.mp4"
  },
  {
    id: "ar-story-experiences",
    title: "Interactive AR Storybook",
    shortTitle: "Vuforia Image Targets // Unity",
    description: "An interactive AR storybook experience developed at VRTAM Studios using Unity and Vuforia Engine. Image targets trigger 3D story pages with animated characters, voice narration, video playback, and visual effects.",
    fullDescription: "A company project at VRTAM Studios involving image-target-based story pages that bring physical books to life through augmented reality. Each page uses a Vuforia Image Target to trigger interactive 3D content including animated characters, environmental storytelling elements, synchronized audio narration, video playback via Unity VideoPlayer, and visual effects. The project demonstrates production-level AR development with Unity: Image Target detection and tracking, Animation system for character animations, VideoPlayer and Render Texture workflows for video playback, Audio Spatializer for immersive sound, VFX for visual effects, and Android build optimization. This is client work and the repository is private.",
    image: arStoryImg,
    category: "ar",
    categoryLabel: "Augmented Reality",
    technologies: ["Unity", "C#", "Vuforia Engine", "Animation", "VideoPlayer", "Audio Spatializer", "VFX", "Render Texture", "Android", "Git LFS"],
    highlights: [
      "Vuforia Image Targets for marker-based AR story pages",
      "Sequenced 3D character animations triggered by target detection",
      "Synchronized voice narration with Animation events",
      "Video playback integration using VideoPlayer and Render Texture",
      "Visual effects (VFX) for magical story transitions",
      "Android deployment with URP optimization",
      "Git LFS for 3D asset version control in team workflow"
    ],
    metrics: {
      platform: "Android (Mobile AR)",
      tracking: "Vuforia Image Targets",
      renderPipeline: "URP",
      status: "Company Project — Private Repository"
    },
    liveUrl: null,
    githubUrl: null
    // No videoUrl for company project — excluded from public video demo system
  }
];