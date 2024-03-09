import json
import os

def recurse_structure(path, iterable):
    for item in iterable:
        if "type" not in item:
            print(item["name"])
        if item["type"] == "dropdown":
            subdir_path = os.path.join(path, item['name'])
            if not os.path.exists(subdir_path):
                os.makedirs(subdir_path)
            # recurse
            recurse_structure(subdir_path + os.path.sep, item["content"])
        elif item["type"] != "img" and item["type"] != "link":
            file_path = os.path.join(path, item['name'])
            if not os.path.exists(file_path):
                print(file_path)
                open(file_path, "a").close()

with open("content/structure.json", "r") as s:
    structure = json.load(s)
    path = "content/sections/"
    if not os.path.exists(os.path.join(path, 'anotace')):
        open(os.path.join(path, 'anotace'), "a").close()
    if not os.path.exists(path):
        os.makedirs(path)

    for section in structure["sections"]:
        section_path = os.path.join(path, section["name"])
        if not os.path.exists(section_path):
            os.makedirs(section_path)
        recurse_structure(section_path + os.path.sep, section["content"])
