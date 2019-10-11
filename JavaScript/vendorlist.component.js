
const refresh = vendors => {
  var tbodyCtrl = document.getElementById("tbody");
  tbodyCtrl.innerHTML = " ";
  for (var vendor of vendors) {
    var tr = "<tr>";
    tr += `<td>${vendor.id}</td>`;
    tr += `<td>${vendor.code}</td>`;
    tr += `<td>${vendor.name}</td>`;
    tr += `<td>${vendor.address}</td>`;
    tr += `<td>${vendor.city}</td>`;
    tr += `<td>${vendor.state}</td>`;
    tr += `<td>${vendor.zip}</td>`;
    tr += `<td>${vendor.phone}</td>`;
    tr += `<td>${vendor.email}</td>`;
    tr += `<td>${`<a href = "file:///C:/repos/GreenTeam-DNBC7/HTML/vendordetail.component.html?id=${vendor.id}&name=${vendor.name}">Details</a> <a href = "file:///C:/repos/GreenTeam-DNBC7/HTML/vendoredit.component.html?id=${vendor.id}&name=${vendor.name}">Edit</a>`}</td>`;
    tr += "</tr>";
    tbodyCtrl.innerHTML += tr;
  }
};

const getVendors = () => {
  VendorService.list().done(res => refresh(res));
};
