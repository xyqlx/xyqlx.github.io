import sys
if len(sys.argv) < 2:
    print("Usage: add_project.py <project_name>")
    sys.exit(1)
project_name = sys.argv[1]
folder_name = project_name.replace(" ", "-")
# foo bar -> FooBar
vue_name = "".join([word.capitalize() for word in project_name.split(" ")])

# show the user what we're going to do
print(f"Creating project in {folder_name} with {vue_name}.vue")
# confirm with the user
response = input("Continue? (y/n) ")
if response != "y":
    # modify folder name?
    response = input("Modify folder name? (y/n) ")
    if response == "y":
        folder_name = input("Enter new folder name: ")
    # modify Vue name?
    response = input("Modify Vue name? (y/n) ")
    if response == "y":
        vue_name = input("Enter new Vue name: ")

# create the folder
import os
projects_path = "./src/components/projects"
folder_path = os.path.join(projects_path, folder_name)
os.makedirs(folder_path, exist_ok=True)
print(f"Created {folder_path}")

# create the Vue file
vue_path = os.path.join(folder_path, f"{vue_name}.vue")
with open(vue_path, "w") as f:
    f.write(f"""<script setup lang="ts">
import MyProject from '../MyProject.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import MarkdownCell from '../MarkdownCell.vue';
</script>

<template>
  <MyProject project="{folder_name}">
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown">
    </MarkdownCell>
  </MyProject>
</template>

<style scoped>
</style>
""")
print(f"Created {vue_path}")

# create the markdown files
en_md_path = os.path.join(folder_path, "en.md")
zh_md_path = os.path.join(folder_path, "zh.md")
with open(en_md_path, "w") as f:
    f.write(f"")
with open(zh_md_path, "w") as f:
    f.write(f"")
print(f"Created markdown files")

# add the project to the projects.ts
projects_ts_path = os.path.join(projects_path, "projects.ts")
project_json_str = f"""    {{
        name: "{folder_name}",
        component: () => import('./{folder_name}/{vue_name}.vue'),
        tags: [],
        description: {
            'en': '',
            'zh-CN': ''
        }
    }},"""
# add before '// add new project here'
with open(projects_ts_path, "r") as f:
    lines = f.readlines()
    new_lines = []
    for line in lines:
        new_lines.append(line)
        if line.strip() == "// add new project here":
            new_lines.append(project_json_str)
    with open(projects_ts_path, "w") as f:
        f.writelines(new_lines)
print(f"Added to {projects_ts_path}")
