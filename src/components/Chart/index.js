import Chart from 'chart.js/auto';

const createChart = async () => {
    const token = "rdhvw0yehud95y3rq2bgtar222xyf830yb1b61e0" 
    const url = "https://api.json-generator.com/templates/Xxx0fa8EuNu9/data"
    const api = `${url}?access_token=${token}`
    const students = await fetch(api)
    .then(res=>res.json())
    let labels_arr = [];
    let data_arr = [];
    students.forEach(el => {
        labels_arr.push(el.name)
        data_arr.push(el.rate)
    });
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels_arr,
        datasets: [{
            label: 'Students Rating',
            data: data_arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
console.log(myChart)

}

export default createChart