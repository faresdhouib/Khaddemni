document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let jobField = document.getElementById('job-field').value;
    
    // Dummy job listings for demonstration
    let jobs = [
        { title: 'Barista', description: 'Looking for a barista at Coffee Shop X' },
        { title: 'Waiter', description: 'Waiter needed for Restaurant Y' }
    ];
    
    let jobList = document.getElementById('job-list');
    jobList.innerHTML = ''; // Clear previous results
    
    jobs.filter(job => job.title.toLowerCase().includes(jobField.toLowerCase())).forEach(job => {
        let jobItem = document.createElement('div');
        jobItem.className = 'job-item';
        jobItem.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
        jobList.appendChild(jobItem);
    });
});
