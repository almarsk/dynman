import json
import os

def recurse_structure(path, iterable):
    for index,item in enumerate(iterable):
        if "type" not in item:
            print(item["name"])
        if item["type"] == "dropdown":
            os.makedirs(path+str(index)+" - "+item['name'])
            # recurse
            recurse_structure(path+str(index)+" - "+item['name']+"/", item["content"])
        elif item["type"] != "img":
            with open(path+str(index)+" - "+item["name"], "w"):
                pass

with open("content/structure.json", "r") as s:
    structure = json.loads(s.read())
    path = "content/sections/"
    if os.path.exists(path):
        os.removedirs(path)
    os.makedirs(path)
    with open(path+structure["annotation"], "w"):
        pass

    for index, section in enumerate(structure["sections"]):
        os.makedirs(path+str(index)+" - "+section["name"])
        recurse_structure(path+str(index)+" - "+section["name"]+"/", section["content"])
