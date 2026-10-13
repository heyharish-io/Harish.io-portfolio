export const skillCategories = [
  { id: "all", name: "All Technologies" },
  { id: "ar-vr", name: "AR / VR & Spatial" },
  { id: "unity", name: "Unity Engine" },
  { id: "3d-tools", name: "3D & Creative Tools" },
  { id: "dev-tools", name: "Development & Workflow" }
];

export const skills = [
  // AR / VR & Spatial
  {
    name: "Augmented Reality",
    category: "ar-vr",
    tag: "Vuforia Image Targets",
    description: "Image Target detection, Area Targets, Ground Plane, Model Targets, and runtime image target creation.",
    icon: "Vuforia"
  },
  {
    name: "Virtual Reality",
    category: "ar-vr",
    tag: "Unity XR / OpenXR",
    description: "Room-scale 6-DoF, XR Interaction Toolkit, locomotion systems, hand tracking, haptics, Meta Quest optimization.",
    icon: "Unity"
  },
  {
    name: "XR Development",
    category: "ar-vr",
    tag: "Unity 2022/6000 LTS",
    description: "Cross-platform XR builds (Android, iOS, Standalone, PCVR), AR Foundation, OpenXR, XR Management.",
    icon: "Unity"
  },
  {
    name: "Spatial Interaction Design",
    category: "ar-vr",
    tag: "UI/UX for XR",
    description: "Diegetic UI, spatial canvas, gaze/gesture/controller input, comfort-driven interaction patterns.",
    icon: "Unity"
  },
  {
    name: "AI Integration in Unity",
    category: "ar-vr",
    tag: "Gemini API / REST",
    description: "LLM API integration via UnityWebRequest, async patterns, JSON handling, chat UI with TextMeshPro.",
    icon: "Unity"
  },

  // Unity Engine
  {
    name: "Unity Engine",
    category: "unity",
    tag: "2022.3 LTS / 6000+",
    description: "Core engine mastery: rendering pipelines (URP/HDRP), physics, animation, asset bundles, profiling, optimization.",
    icon: "Unity"
  },
  {
    name: "C#",
    category: "unity",
    tag: "C# 11 / .NET Standard 2.1",
    description: "Advanced C#: async/await, generics, LINQ, reflection, memory management, burst compiler, job system.",
    icon: "CSharp"
  },
  {
    name: "Unity Addressables & CCD",
    category: "unity",
    tag: "Asset Management",
    description: "Addressable asset system, content catalogs, remote loading, Cloud Content Delivery, versioning, cache management.",
    icon: "Addressables"
  },
  {
    name: "URP & Shader Graph",
    category: "unity",
    tag: "Universal Render Pipeline",
    description: "Custom Shader Graph shaders, render features, post-processing, LWRP/URP optimization for mobile XR.",
    icon: "Unity"
  },
  {
    name: "Android Build & Deploy",
    category: "unity",
    tag: "Gradle / ADB / Play Console",
    description: "Gradle configuration, keystore management, App Bundles (AAB), Play Asset Delivery, OBB, logcat debugging.",
    icon: "Android"
  },
  {
    name: "Animation & VFX",
    category: "unity",
    tag: "Animator / VFX Graph",
    description: "Animation controllers, timeline, blend trees, VFX Graph for particle systems, Shader Graph VFX.",
    icon: "Unity"
  },
  {
    name: "Video & Audio Integration",
    category: "unity",
    tag: "Media Pipeline",
    description: "Video Player, Audio Spatializer, streaming assets, synchronized playback, format optimization.",
    icon: "Unity"
  },

  // 3D & Creative Tools
  {
    name: "Blender",
    category: "3d-tools",
    tag: "Modeling / Rigging / Animation",
    description: "Low-poly modeling, retopology, UV unwrapping, rigging, animation baking, glTF/USDZ export for real-time.",
    icon: "Blender"
  },
  {
    name: "Maya",
    category: "3d-tools",
    tag: "Production Pipeline",
    description: "High-poly modeling, animation workflows, Arnold rendering, Alembic/USD exchange, pipeline integration.",
    icon: "Maya"
  },
  {
    name: "3D Asset Integration",
    category: "3d-tools",
    tag: "Pipeline / Optimization",
    description: "FBX/glTF import, LOD generation, texture atlasing, ASTC/BC compression, Draco mesh compression, lightmap baking.",
    icon: "Blender"
  },
  {
    name: "Figma",
    category: "3d-tools",
    tag: "Spatial UI / Prototyping",
    description: "XR UI design systems, component libraries, interactive prototypes, developer handoff, design tokens.",
    icon: "Figma"
  },

  // Development & Workflow
  {
    name: "Git & Git LFS",
    category: "dev-tools",
    tag: "Version Control",
    description: "Branching strategies (GitFlow, trunk-based), LFS for 3D assets, submodules, CI/CD integration, conflict resolution.",
    icon: "Git"
  },
  {
    name: "GitHub Actions",
    category: "dev-tools",
    tag: "CI/CD Pipelines",
    description: "Automated Unity builds, test runners, artifact publishing, release automation, self-hosted runners for Unity.",
    icon: "GitHub"
  },
  {
    name: "Visual Studio / VS Code",
    category: "dev-tools",
    tag: "IDE & Debugging",
    description: "Unity debugging, Roslyn analyzers, ReSharper/Rider, GitLens, shader debugging, remote device debugging.",
    icon: "GitHub"
  },
  {
    name: "Unreal Engine 5",
    category: "dev-tools",
    tag: "Blueprints / C++",
    description: "Blueprint visual scripting, Niagara VFX, Lumen/Nanite, OpenXR, Meta XR plugin, C++ module development.",
    icon: "Unreal"
  },
  {
    name: "Fork (Git Client)",
    category: "dev-tools",
    tag: "Git GUI Client",
    description: "Visual Git workflow, interactive rebase, conflict resolution, submodule management, Git LFS support.",
    icon: "Git"
  }
];