async function fetchData(){const n=await fetch("https://next.json-generator.com/api/json/get/VyEjrvLyq"),a=await n.json();console.log(a);let s="";for(let n of a)s+=`\n               <h1>\n                    ${n.name}\n                </h1>\n               <p>\n                    ${n.email}\n                <p/>\n\n                <ul>\n                    <li>\n                        <span>city: </span>\n                        ${n.address.city}\n                    </li>\n                    <li><span>street: </span>${n.address.street}</li>\n                    <li><span>zip: </span>${n.address.zipcode}</li>\n                </ul>\n\n                <h2>\n                    <span>${n.address.geo.lat}</span>\n                    <span>${n.address.geo.lng}</span>\n                </h2>\n        `;document.body.innerHTML=s}fetchData();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXN5bmMiLCJmZXRjaERhdGEiLCJyZXNwb25zZURhdGEiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsImQiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwiY2l0eSIsInN0cmVldCIsInppcGNvZGUiLCJnZW8iLCJsYXQiLCJsbmciLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUNBQSxlQUFlQyxZQUNYLE1BQU1DLFFBQXFCQyxNQUFNLDBEQUMzQkMsUUFBYUYsRUFBYUcsT0FDaENDLFFBQVFDLElBQUlILEdBRVosSUFBSUksRUFBUyxHQUViLElBQUksSUFBSUMsS0FBS0wsRUFHVEksR0FBVSw4Q0FFSUMsRUFBRUMsd0VBR0ZELEVBQUVFLHVKQU1FRixFQUFFRyxRQUFRQyxpRkFFV0osRUFBRUcsUUFBUUUsMERBQ2JMLEVBQUVHLFFBQVFHLDBGQUkxQk4sRUFBRUcsUUFBUUksSUFBSUMseUNBQ2RSLEVBQUVHLFFBQVFJLElBQUlFLDhDQVN0Q0MsU0FBU0MsS0FBS0MsVUFBWWIsRUFHOUJQIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2goXCJodHRwczovL25leHQuanNvbi1nZW5lcmF0b3IuY29tL2FwaS9qc29uL2dldC9WeUVqcnZMeXFcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2VEYXRhLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xyXG5cclxuICAgIGZvcihsZXQgZCBvZiBkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICBvdXRwdXQgKz0gYFxyXG4gICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAke2QuZW1haWx9XHJcbiAgICAgICAgICAgICAgICA8cC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Y2l0eTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2QuYWRkcmVzcy5jaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPnN0cmVldDogPC9zcGFuPiR7ZC5hZGRyZXNzLnN0cmVldH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj56aXA6IDwvc3Bhbj4ke2QuYWRkcmVzcy56aXBjb2RlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2QuYWRkcmVzcy5nZW8ubGF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2QuYWRkcmVzcy5nZW8ubG5nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgYFxyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gb3V0cHV0O1xyXG59XHJcblxyXG5mZXRjaERhdGEoKTsiXX0=
