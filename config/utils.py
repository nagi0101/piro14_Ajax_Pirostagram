import os
from uuid import uuid4


def uuid_file_path(instance, filename):
    uuid = uuid4().hex
    ext = os.path.splitext(filename)[-1].lower()
    return "/".join(
        [
            uuid[:2],
            uuid[2:4],
            uuid[4:] + ext,
        ]
    )
