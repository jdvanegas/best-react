export const goBack = (e: any) => {
  if (window.history.length > 2) window.history.back();
  else window.location.href = "/";

  e && e.preventDefault();
};
