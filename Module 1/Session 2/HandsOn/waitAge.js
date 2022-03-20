const students = [
    {
      name: "Alice",
      age: 20
    },
    {
      name: "Bob",
      age: 21
    },
    {
      name: "Jane",
      age: 20
    }
  ];
  
  const renderTable = () => {
    students.forEach(({ name, age }) => {
      const table = document
        .getElementById("data")
        .getElementsByTagName("tbody")[0];
  
      //stackoverflow
      table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`;
    });
  };
  
  // a function to calculate avg age
  const calcAvgAge = (students) => {
    const total = students.reduce((acc, student) => acc + student.age, 0);
    return total / students.length;
  };
  
  // callback function when button clicked
  const handleClick = () => {
    const avg = calcAvgAge(students);
    document.getElementById("avg").innerHTML = avg;
  };
  
  // add onclick listener
  document.getElementById("calcButton").addEventListener("click", handleClick);
  
  //run render table
  renderTable();
  