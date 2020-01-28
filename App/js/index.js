// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("24.166666666666668em")
                .setTop("0.8333333333333334em")
                .setWidth("20.75em")
                .setHeight("5.333333333333333em")
                .setCaption("Data Feed Form")
                .setHAlign("center")
                .setFontSize("18px")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput16")
                .setDirtyMark(false)
                .setLeft("2.5em")
                .setTop("4.166666666666667em")
                .setWidth("19.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Grade")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Third",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Fourth",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"Fifth",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput21")
                .setDirtyMark(false)
                .setLeft("2.5em")
                .setTop("7.5em")
                .setWidth("19.666666666666668em")
                .setLabelSize("8em")
                .setLabelCaption("Subject")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Science",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Maths",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"Reading",
                        "imageClass":"xui-icon-number3"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setDirtyMark(false)
                .setLeft("2.5em")
                .setTop("10.833333333333334em")
                .setWidth("45.5em")
                .setHeight("7.5em")
                .setLabelSize("8em")
                .setLabelCaption("Question")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setDirtyMark(false)
                .setLeft("10.833333333333334em")
                .setTop("39.166666666666664em")
                .setWidth("8.75em")
                .setCaption("Submit")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block34")
                .setLeft("6.666666666666667em")
                .setTop("21.666666666666668em")
                .setWidth("52.5em")
                .setHeight("3.3333333333333335em")
            );
            
            host.xui_ui_block34.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("43.333333333333336em")
                .setTop("0.8333333333333334em")
                .setCaption("Add Next Option")
                .onClick({
                    "newbies":{
                        "N3rwkkzbk":"xui.UI.Input",
                        "Nb6zr5s46":"xui.UI.HTMLButton"
                    },
                    "actions":[
                        {
                            "desc":"Action 1",
                            "type":"control",
                            "target":"xui_ui_htmlbutton3",
                            "args":[
                                undefined,
                                undefined,
                                "{page.xui_ui_block34.show()}"
                            ],
                            "method":"show",
                            "event":1,
                            "conditions":[
                                {
                                    "left":"{page.xui_ui_input7}",
                                    "symbol":"non-empty",
                                    "right":""
                                }
                            ]
                        }
                    ]
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("3.3333333333333335em")
                .setTop("22.5em")
                .setWidth("45.5em")
                .setLabelSize("8em")
                .setLabelCaption("Answer")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});