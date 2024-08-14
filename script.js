document.addEventListener('DOMContentLoaded', () => {
    const timetableButton = document.getElementById('timetable-button');
    const content = document.getElementById('content');
    
    timetableButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Create and display TimeTable content
        const timetableHtml = `
            <div class="timetable">
                <h2>My TimeTable</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Subject</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>Math</td>
                            <td>9:00 AM - 10:00 AM</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>Science</td>
                            <td>10:00 AM - 11:00 AM</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>English</td>
                            <td>11:00 AM - 12:00 PM</td>
                        </tr>
                        <!-- Add more rows as needed -->
                    </tbody>
                </table>
            </div>
        `;
        
        content.innerHTML = timetableHtml;
    });
});
