# Schema.org markup of videos for FckEditor

### Plugin for inserting video into fckeditor redactor

### Info

Google supports and recommends using the schema.org on-page markup for videos. The schema.org vocabulary is supported by Google, Bing, and Yahoo! Using schema.org to describe your videos will allow Google to index and show your videos in search.

You must use the following code to indicate to search engines such as video

```html
<div itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
  <h2>Video: <span itemprop="name">Title</span></h2>
  <meta itemprop="duration" content="T1M33S" />
  <meta itemprop="thumbnailUrl" content="thumbnail.jpg" />
  <meta itemprop="contentUrl" content="http://www.example.com/video123.flv" />
  <meta itemprop="embedUrl" content="http://www.example.com/videoplayer.swf?video=123" />
  <meta itemprop="uploadDate" content="2011-07-05T08:00:00+08:00" />
  <meta itemprop="expires" content="2012-01-30T19:00:00+08:00" />
  <object ...>
    <param ...>
    <embed type="application/x-shockwave-flash" ...>
  </object>
  <span itemprop="description">Video description</span>
</div>
```

This plugin uses **only required parameters**:

![VideoObject, required parameters](http://clip.corp.mail.ru/clip/m223/1423041872-clip-14kb-imnxjpWUsndf.png)

**The plugin asks for the following information:**
* Code of video;
* Title (itemprop="name");
* Preview image (itemprop="thumbnailUrl", URL to image for preview);
* Description (itemprop="description").

**Code of video** can be any. This can be a video from **Youtube code**, HTML 5 tag **<video>**, *flash object flv* and etc.

### An example of the resulting code:

```html
<div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject">
  <div itemprop="video" itemscope="" itemtype="http://schema.org/VideoObject">
    <meta itemprop="name" content="PSY - GANGNAM STYLE"/>
    <meta itemprop="thumbnailUrl" content="http://i.ytimg.com/vi_webp/HkMNOlYcpHg/default.webp"/>
    <meta itemprop="description" content="The best video of YouTube"/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>
```

### Install
1 - Copy folder **video** into **editor/plugin**;

2 - Add/modify code in fckconfig.js: 
```javascript
FCKConfig.Plugins.Add('video');
...
FCKConfig.ProtectedSource.Add( /(<meta(.*?)\/>)/gi );
...
FCKConfig.ProtectedTags = 'meta' ;
```
3 - Change FCKConfig.ToolbarSets["Default"]:

![FCKConfig.ToolbarSets](http://clip.corp.mail.ru/clip/m223/1423042971-clip-16kb-syjWga64qWZW.png)

