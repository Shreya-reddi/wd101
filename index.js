
function validateDOB(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age >= 18 && age <= 55;
  }
  
  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;
    
    if (validateDOB(dob)) {
      const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow(-1);
      const cells = [name, email, password, dob, termsAccepted ? 'Yes' : 'No'];
      
      for (let i = 0; i < cells.length; i++) {
        const cell = newRow.insertCell(i);
        cell.innerHTML = cells[i];
      }
      
      
      const data = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        termsAccepted: termsAccepted
      };
      
      localStorage.setItem('userData', JSON.stringify(data));
    } else {
      alert('Age must be between 18 and 55.');
    }
  });
  
