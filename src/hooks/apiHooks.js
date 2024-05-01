exports.postHooks = async (data, url) => {
  const res = await fetch(`/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await res.json();
  return responseData;
};

exports.patchHooks = async (data, url, id) => {
  const res = await fetch(`/api/${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await res.json();
  return responseData;
};
exports.putHooks = async (data, url, id) => {
  const res = await fetch(`/api/${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await res.json();
  return responseData;
};
exports.deleteHooks = async (url, id) => {
  const res = await fetch(`/api/${url}/${id}`, {
    method: "DELETE",
  });
  const responseData = await res.json();
  return responseData;
};
