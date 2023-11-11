class Applicant {
  constructor(name, age, money) {
    this.name = name;
    this.age = age;
    this.money = money;
  }

  getResume() {
    return `Nama: ${this.name}, Umur: ${this.age}, Uang Sangu: ${this.money}`;
  }
}

const applicants = [];

function submitForm() {
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);
  const money = parseInt(document.getElementById('money').value);

  
  if (name.length < 10 || age < 25 || money < 100000 || money > 1000000) {
    alert('Mohon isi form dengan benar.');
    return;
  }

  const newApplicant = new Applicant(name, age, money);
  applicants.push(newApplicant);

  
  document.getElementById('registrationForm').reset();

 
  displayApplicantList();


  calculateAndDisplayAverage();
}

function displayApplicantList() {
  const listContainer = document.getElementById('applicantList');
  listContainer.innerHTML = '';

  applicants.forEach(applicant => {
    const row = document.createElement('tr');
    row.innerHTML = `<td class="border p-2">${applicant.name}</td>
                     <td class="border p-2">${applicant.age}</td>
                     <td class="border p-2">${applicant.money}</td>
                     <td class="border p-2">${applicant.getResume()}</td>`;
    listContainer.appendChild(row);
  });
}

function calculateAndDisplayAverage() {
  const totalMoney = applicants.reduce((acc, applicant) => acc + applicant.money, 0);
  const averageMoney = totalMoney / applicants.length || 0;

  const totalAge = applicants.reduce((acc, applicant) => acc + applicant.age, 0);
  const averageAge = totalAge / applicants.length || 0;

  const averageInfo = document.getElementById('averageInfo');
  averageInfo.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${averageMoney.toFixed(2)} dengan rata-rata umur ${averageAge.toFixed(2)}`;
}