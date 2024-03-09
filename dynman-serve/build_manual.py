import json
import os

def recurse_structure(path, iterable):
    for index,item in enumerate(iterable):
        if item["type"] == "dropdown":
            # recurse
            recurse_structure(path+item['name']+"/", item["content"])
        elif item["type"] != "img" and item["type"] != "link":
            print(item)
            with open(path+item["name"], "r") as i:
                item["text"] = i.read()
        elif item["type"] == "img":
            print("todo img")

def build_manual(structure):
    with open("content/structure.json", "r") as s:
        structure = json.loads(s.read())
        path = "content/sections/"
        with open(path+structure["annotation"], "r") as a:
            structure["annotation"] = a.read()

        for index, section in enumerate(structure["sections"]):
            recurse_structure(path+section["name"]+"/", section["content"])

    return structure
