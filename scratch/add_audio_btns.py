import re

def add_audio_buttons(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match [Ayat Ke-XXXX]
    # We want to replace it with [Ayat Ke-XXXX] <button class="audio-play-btn" data-audio-id="XXXX"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
    
    def replacement(match):
        idx = match.group(1)
        btn = f'<button class="audio-play-btn" data-audio-id="{idx}"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>'
        return f'[Ayat Ke-{idx}] {btn}'

    new_content = re.sub(r'\[Ayat Ke-(\d+)\]', replacement, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

add_audio_buttons('d:/PJBL AGAMA/pjbl-main/src/data/materiData.ts')
