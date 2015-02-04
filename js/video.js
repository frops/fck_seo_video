/**
 * @author i.asanov <i.asanov@corp.mail.ru>
 */


var oEditor = window.parent.InnerDialogLoaded();

window.onload = function()
{
  window.parent.SetOkButton(true);
};

/**
 * @return boolean
 */
function Ok()
{
  var code = document.getElementById('video_code');
  var title = document.getElementById('video_title');
  var preview = document.getElementById('video_preview');
  var description = document.getElementById('video_description');

  var oEditor = window.parent.InnerDialogLoaded();

  code.value = code.value.trim();
  title.value = title.value.trim();
  preview.value = preview.value.trim();
  description.value = description.value.trim();

  if (!code.value.length) {
    alert("Пожалуйста, укажите HTML код видео.");
    return false;
  }

  if (!title.value.length) {
    alert("Пожалуйста, укажите заголовок для видео.");
    return false;
  }

  if (!preview.value.length) {
    alert("Пожалуйста, укажите путь к изображению для данного видео.");
    return false;
  }

  var html = generateVideoHtml(code.value, title.value, preview.value, description.value);
  oEditor.FCK.InsertHtml('');
  oEditor.FCK.InsertHtml(html);
  return true;
}

/**
 *
 * @param code
 * @param title
 * @param preview
 * @param description
 * @returns {string}
 */
function generateVideoHtml(code, title, preview, description)
{
  return '<div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject">' +
  '<meta itemprop="name" content="' + title + '" />' +
  '<meta itemprop="thumbnailUrl" content="' + preview + '" />' +
  (description != '' ? '<meta itemprop="description" content="' + description + '" />' : '' ) +
  code +
  '</div>';
}