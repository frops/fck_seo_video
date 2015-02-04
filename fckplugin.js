/**
 * @author ifrops <ifrops@gmail.com>
 * @link https://github.com/frops/fck_seo_video
 */

// ColumnsObject constructor
var videoToolbarCommand = function() {};

var label = 'Insert video';

// register the command
FCKCommands.RegisterCommand('video', new videoToolbarCommand());

// create the toolbar  button
var columnsButton = new FCKToolbarButton('video',  label,  label);
columnsButton.IconPath = FCKPlugins.Items['video'].Path + 'icons/icon.png';
FCKToolbarItems.RegisterItem('video', columnsButton);

// manage the plugins' button behavior
videoToolbarCommand.prototype.GetState = function() {
  return FCK_TRISTATE_OFF;
};

// columns's button click function
videoToolbarCommand.prototype.Execute = function() {
  var dialog = new FCKDialogCommand('video', label, FCKPlugins.Items['video'].Path + 'form.html', 500, 310);
  dialog.Execute();
};