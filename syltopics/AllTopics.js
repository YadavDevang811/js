// --- JAVASCRIPT TOPICS COVERED ---
// 1. Array Objects & ES6 Spread
// 2. DOM Selection & Events
// 3. Array Methods (Filter, Map, Reduce)
// 4. Async/Await with Try-Catch
// 5. Logic for Task Management

// 1. Data Store (Initially khali bhi rakh sakte hain)
let myProjects = [
    { id: 101, name: "Patola E-commerce", tech: "React", status: "In Progress" },
    { id: 102, name: "Portfolio Website", tech: "HTML/CSS", status: "Completed" }
];

// 2. Adding a new project using Spread Operator (Modern JS)
const addNewProject = (name, tech) => {
    const newEntry = {
        id: Date.now(), // Unique ID generate karne ka desi tarika
        name,
        tech,
        status: "Pending"
    };
    myProjects = [...myProjects, newEntry];
    console.log("Updated Project List:", myProjects);
    showProjects(); // UI update karne ke liye call kiya
};

// 3. Filtering and Displaying (Map & Filter)
function showProjects(filterTech = "") {
    const displayArea = document.getElementById('app-root');
    
    // Sirf wahi dikhao jo filter mein hai
    const filtered = myProjects.filter(p => p.tech.includes(filterTech));

    // HTML generate karna using Map
    const listItems = filtered.map(p => {
        return `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Tech: ${p.tech} | <b>${p.status}</b></p>
            </div>
        `;
    }).join('');

    if(displayArea) displayArea.innerHTML = listItems;
}

// 4. Calculating total stats using Reduce (Ye interview mein puchte hain)
const getStats = () => {
    const total = myProjects.reduce((count, p) => count + 1, 0);
    console.log("Total Projects in Repo:", total);
};

// 5. Async Function - Data fetch karne ke liye (Dummy API)
async function getExternalData() {
    console.log("Checking for updates from server...");
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log("Server Message:", data.title);
    } catch (err) {
        console.log("Error fetching data:", err);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    showProjects();
    getStats();
    getExternalData();
});

// Testing - Direct call karke check kar sakte ho console mein
// addNewProject("JS Master File", "Vanilla JS");