# SPDX-License-Identifier: MIT
# Copyright (c) 2021 anvilistas

import unittest

import anvil

from ._anvil_designer import UnitTestTemplateTemplate
__version__ = "0.0.1"


class UnitTestTemplate(UnitTestTemplateTemplate):
    def __init__(self, **properties):
        # Set Form properties and Data Bindings.
        self.init_components(**properties)
        self.cp_1.role = self.cp_role
        self.lbl_doc.text = self.test_desc
        self.btn_run.text = self.btn_text
        self.btn_run.role = self.btn_role
        self.lbl_success.font_size = self.icon_size
        self.lbl_fail.font_size = self.icon_size
        if self.rp_panels:
            self.cp_1.add_component(self.rp_panels)

    def btn_run_click(self, **event_args):
        """This method is called when the button is clicked"""
        self.btn_run_function()

