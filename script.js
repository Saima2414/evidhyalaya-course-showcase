const courses = [
  {
    id: "jee101",
    title: "JEE Main 2026: Mock Test Series",
    instructor: "eVidhyalaya Experts",
    duration: "Self-Paced",
    imageUrl: "images/jee-main-2026.png",
    description: "Comprehensive mock tests based on the NTA reduced syllabus for Class 11 & 12. Includes 30 topic-wise tests."
  },
  {
    id: "neet201",
    title: "NEET 2026: Ultimate Score Booster Pack",
    instructor: "Top Medical Faculty",
    duration: "12 Weeks",
    imageUrl: "images/3.png",
    description: "An intensive pack with chapter-wise tests, detailed analysis, and NTA level questions for Physics, Chemistry, and Biology."
  },
  {
    id: "jee202",
    title: "JEE 2026: Chapter-wise Tests (PCM)",
    instructor: "Experienced IITian Faculty",
    duration: "Ongoing Access",
    imageUrl: "images/1.png",
    description: "Over 350+ tests covering Physics, Chemistry, and Mathematics chapter-wise, full syllabus, PYQs, and more."
  },
  {
    id: "neet301",
    title: "NEET Biology MasterClass 2025",
    instructor: "Dr. Anika Sharma",
    duration: "8 Weeks",
    imageUrl: "images/NEET-Biology-Syllabus-2025.png",
    description: "In-depth coverage of the NEET Biology syllabus with concept lectures, MCQs, and doubt clearing sessions."
  },
  {
    id: "jee303",
    title: "JEE Advanced 2025: Full Syllabus Revision",
    instructor: "eVidhyalaya Senior Mentors",
    duration: "6 Weeks Intensive",
    imageUrl: "images/2.png",
    description: "A fast-paced revision course covering the entire JEE Advanced syllabus with problem-solving strategies and mock tests."
  }
];

const container = document.getElementById("courseContainer");
const filterInput = document.getElementById("filterInput");
const sortSelect = document.getElementById("sortSelect");

function displayCourses(data) {
  container.innerHTML = "";

  data.forEach(course => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition";

    card.innerHTML = `
      <img src="${course.imageUrl}" alt="${course.title}" class="w-full h-40 object-cover rounded-md mb-4">
      <h2 class="text-lg font-semibold text-indigo-700">${course.title}</h2>
      <p><span class="font-bold">Instructor:</span> ${course.instructor}</p>
      <p><span class="font-bold">Duration:</span> ${course.duration}</p>
      <p class="mt-2 text-sm">${course.description}</p>
    `;

    container.appendChild(card);
  });
}

function filterAndSortCourses() {
  let filtered = [...courses];

  const query = filterInput.value.toLowerCase();
  if (query) {
    filtered = filtered.filter(course => course.title.toLowerCase().includes(query));
  }

  const sortValue = sortSelect.value;
  if (sortValue === "titleAsc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "titleDesc") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  displayCourses(filtered);
}

filterInput.addEventListener("input", filterAndSortCourses);
sortSelect.addEventListener("change", filterAndSortCourses);

// Initial render
displayCourses(courses);
