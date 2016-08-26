/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var pictureSource;		//图片来源
var destinationType;		//设置返回值的格式
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent();
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        //
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        console.log('Received Event: ' + id);
    },

    onPhotoDataSuccess:function(imageData) {
  		// 取消注释以查看Base64编码的图像数据
  		// console.log(imageData);
  		// 获取图像句柄
  		var smallImage = document.getElementById('smallImage');

  		// 取消隐藏的图像元素
  		smallImage.style.display = 'block';

  		// 显示拍摄的照片
  		// 使用内嵌CSS规则来缩放图片
  		smallImage.src = "data:image/jpeg;base64," + imageData;
	 },

   // 当成功得到一张照片的URI后被调用
   onPhotoURISuccess:function (imageURI) {

		// 取消注释以查看图片文件的URI
		// console.log(imageURI);
		// 获取图片句柄
		var largeImage = document.getElementById('largeImage');

		// 取消隐藏的图像元素
		largeImage.style.display = 'block';

		// 显示拍摄的照片
		// 使用内嵌CSS规则来缩放图片
		largeImage.src = imageURI;
	},

   // “Capture Photo”按钮点击事件触发函数
   capturePhoto:function () {

		// 使用设备上的摄像头拍照，并获得Base64编码字符串格式的图像
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
  },

   // “Capture Editable Photo”按钮点击事件触发函数
   capturePhotoEdit:function () {

		// 使用设备上的摄像头拍照，并获得Base64编码字符串格式的可编辑图像
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true });
  },

   //“From Photo Library”/“From Photo Album”按钮点击事件触发函数
   getPhoto:function(source) {

   		// 从设定的来源处获取图像文件URI
		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
		destinationType: destinationType.FILE_URI,sourceType: source });
  },

   // 当有错误发生时触发此函数
   onFail:function(mesage) {
		alert('Failed because: ' + message);
  },
};
