const url = "http://localhost:55555/api/vendors";

let VendorService = {};

VendorService.list = () => {
  return $.getJSON(url);
};

VendorService.get = (id) => {
  return $.getJSON(`${url}/${id}`);
};
VendorService.insert = (vendor) => {
  return $.ajax({
    method: "POST",
    url: url,
    data: JSON.stringify(vendor),
    dataType: "json",
    crossOrigin: true,
    contentType: "application/json"
  });
};

VendorService.delete = (vendor) => {
  return $.ajax({
    method: "DELETE",
    url: (`${url}/${vendor.id}`),
    data: JSON.stringify(vendor),
    dataType: "json",
    crossOrigin: true,
    contentType: "application/json"
  });
};

VendorService.update = (vendor) => {
  return $.ajax({
    method: "PUT",
    url: (`${url}/${vendor.id}`),
    data: JSON.stringify(vendor),
    dataType: "json",
    crossOrigin: true,
    contentType: "application/json"
  });
};
