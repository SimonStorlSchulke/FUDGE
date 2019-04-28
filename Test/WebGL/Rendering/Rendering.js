var WebGLRendering;
(function (WebGLRendering) {
    var ƒ = Fudge;
    window.addEventListener("DOMContentLoaded", init);
    let node;
    let child;
    let grandchild;
    function init() {
        Scenes.createThreeLevelNodeHierarchy();
        node = Scenes.node;
        child = node.getChildren()[0];
        let viewPort = new ƒ.Viewport("TestViewport", node, Scenes.camera.getComponent(ƒ.ComponentCamera));
        viewPort.prepare();
        // let webgl: ƒ.WebGL = new ƒ.WebGL();
        // webgl.addEventListener("snv", hndClick);
        ƒ.WebGL.addBranch(node);
        ƒ.WebGL.recalculateAllNodeTransforms();
        ƒ.WebGL.drawBranch(node, Scenes.camera.getComponent(ƒ.ComponentCamera));
        node.cmpTransform.rotateZ(60);
        ƒ.WebGL.recalculateAllNodeTransforms();
        // viewPort.prepare();
        ƒ.WebGL.drawBranch(node, Scenes.camera.getComponent(ƒ.ComponentCamera));
        ƒ.WebGL.updateNode(node);
        ƒ.WebGL.removeNode(node);
    }
})(WebGLRendering || (WebGLRendering = {}));
//# sourceMappingURL=Rendering.js.map